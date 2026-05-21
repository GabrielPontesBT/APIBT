import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, shareReplay, switchMap } from 'rxjs';

import { NavigationNode } from '../../../core/models/navigation-node.model';
import { VersionService } from '../../../core/services/version.service';
import {
  parseReleaseList,
  Release,
  ReleasePathMap
} from '../pages/releases/releases.data';

function buildSlugTitleMap(nodes: NavigationNode[], result = new Map<string, string>()): Map<string, string> {
  for (const node of nodes) {
    if (node.type === 'file' && node.slug && node.pageTitle) {
      result.set(node.slug, node.pageTitle);
    }
    if (node.children) {
      buildSlugTitleMap(node.children, result);
    }
  }
  return result;
}

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  private cache = new Map<string, Observable<Release[]>>();

  constructor(
    private http: HttpClient,
    private versionService: VersionService
  ) {}

  getReleases(): Observable<Release[]> {
    return this.versionService.activeVersion$.pipe(
      switchMap(version => this.getReleasesForVersion(version))
    );
  }

  getReleaseById(id: string): Observable<Release | null> {
    if (!id) return of(null);
    return this.getReleases().pipe(
      map(releases => releases.find(r => r.id === id) ?? null)
    );
  }

  private getReleasesForVersion(version: string): Observable<Release[]> {
    if (version === 'v4') return of([]);

    if (!this.cache.has(version)) {
      const releases$ = forkJoin({
        raw: this.http.get(`assets/releases/Releases-${version}.txt`, { responseType: 'text' }),
        pathEntries: this.http.get<Array<{ key: string; path: string[] }>>(`assets/releases/pubname-slugs-${version}.json`),
        sidebar: this.http.get<NavigationNode[]>(`assets/navigation/sidebar-${version}.json`)
      }).pipe(
        map(({ raw, pathEntries, sidebar }) => {
          const pathMap: ReleasePathMap = Object.fromEntries(
            pathEntries.map(entry => [entry.key, entry.path])
          );
          const slugTitleMap = buildSlugTitleMap(sidebar);
          const releases = parseReleaseList(raw, pathMap);

          for (const release of releases) {
            for (const group of release.grupos) {
              for (const item of group.items) {
                if (item.path?.length) {
                  const title = slugTitleMap.get(item.path.join('/'));
                  if (title) item.label = title;
                  item.path = [version, ...item.path];
                }
              }
            }
          }

          return releases;
        }),
        shareReplay(1)
      );

      this.cache.set(version, releases$);
    }

    return this.cache.get(version)!;
  }
}
