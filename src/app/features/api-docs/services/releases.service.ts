import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, shareReplay } from 'rxjs';

import {
  mergeReleases,
  parseReleaseList,
  Release,
  ReleasePathMap
} from '../pages/releases/releases.data';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  private readonly releases$: Observable<Release[]> = forkJoin({
    curated: this.http.get<Release[]>('assets/releases/curated-releases.json'),
    raw: this.http.get('assets/releases/listado_api_completa_por_release.txt', { responseType: 'text' }),
    pathEntries: this.http.get<Array<{ key: string; path: string[] }>>('assets/releases/pubname-slugs.json')
  }).pipe(
    map(({ curated, raw, pathEntries }) => {
      const pathMap: ReleasePathMap = Object.fromEntries(
        pathEntries.map(entry => [entry.key, entry.path])
      );

      return mergeReleases(parseReleaseList(raw, pathMap), curated);
    }),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  getReleases(): Observable<Release[]> {
    return this.releases$;
  }

  getReleaseById(id: string): Observable<Release | null> {
    if (!id) {
      return of(null);
    }

    return this.releases$.pipe(
      map(releases => releases.find(release => release.id === id) ?? null)
    );
  }
}
