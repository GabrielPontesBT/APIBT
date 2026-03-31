import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'active-version';
const DEFAULT_VERSION = 'v3r1';
const VALID_VERSIONS = ['v2r2', 'v2r3', 'v3r1', 'bpay'] as const;

export type VersionId = typeof VALID_VERSIONS[number];

@Injectable({ providedIn: 'root' })
export class VersionService {
  private version$ = new BehaviorSubject<VersionId>(this.loadFromStorage());

  readonly activeVersion$ = this.version$.asObservable();

  get activeVersion(): VersionId {
    return this.version$.value;
  }

  setVersion(version: VersionId): void {
    if (!VALID_VERSIONS.includes(version)) return;
    localStorage.setItem(STORAGE_KEY, version);
    this.version$.next(version);
  }

  private loadFromStorage(): VersionId {
    const stored = localStorage.getItem(STORAGE_KEY) as VersionId;
    return stored && VALID_VERSIONS.includes(stored) ? stored : DEFAULT_VERSION;
  }
}
