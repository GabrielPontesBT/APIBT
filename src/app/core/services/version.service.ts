import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

const STORAGE_KEY = 'active-version';
const DEFAULT_VERSION = 'v3r1';
export const VALID_VERSIONS = ['v2r2', 'v2r3', 'v3r1', 'bpay', 'v4'] as const;

export type VersionId = typeof VALID_VERSIONS[number];

@Injectable({ providedIn: 'root' })
export class VersionService {
  private version$: BehaviorSubject<VersionId>;

  readonly activeVersion$: Observable<VersionId>;

  get activeVersion(): VersionId {
    return this.version$.value;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.version$ = new BehaviorSubject<VersionId>(this.loadFromStorage());
    this.activeVersion$ = this.version$.asObservable();
  }

  setVersion(version: VersionId): void {
    if (!VALID_VERSIONS.includes(version)) return;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, version);
    }
    this.version$.next(version);
  }

  private loadFromStorage(): VersionId {
    if (isPlatformBrowser(this.platformId)) {
      const base     = document.querySelector('base')?.getAttribute('href') ?? '/';
      const pathname = window.location.pathname;
      const stripped = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
      const firstSegment = stripped.split('/').filter(Boolean)[0] as VersionId;
      if (VALID_VERSIONS.includes(firstSegment)) return firstSegment;
      const stored = localStorage.getItem(STORAGE_KEY) as VersionId;
      return stored && VALID_VERSIONS.includes(stored) ? stored : DEFAULT_VERSION;
    }
    return DEFAULT_VERSION;
  }
}
