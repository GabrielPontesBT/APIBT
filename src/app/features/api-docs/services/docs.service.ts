import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { DocPage } from '../../../core/models/doc-page.model';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private cache = new Map<string, Observable<DocPage>>();

  constructor(private http: HttpClient) {}

  getPage(slug: string, version: string): Observable<DocPage> {
    const key = `${version}:${slug}`;
    if (!this.cache.has(key)) {
      const req$ = this.http
        .get<DocPage>(`assets/docs/content/${version}/${slug}.json`)
        .pipe(shareReplay(1));
      this.cache.set(key, req$);
    }
    return this.cache.get(key)!;
  }
}
