/**
 * search.service.ts
 *
 * Carga el índice de búsqueda de documentación desde assets, lo mantiene en
 * memoria para reutilizarlo y expone métodos para buscar resultados por texto
 * de forma simple, rápida y desacoplada del contenido completo de cada página.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { SearchIndexEntry } from '../../../core/models/search-index-entry.model';
import { VersionService } from '../../../core/services/version.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchIndex$?: Observable<SearchIndexEntry[]>;

  constructor(private http: HttpClient, private versionService: VersionService) {}

  getSearchIndex(): Observable<SearchIndexEntry[]> {
    if (!this.searchIndex$) {
      this.searchIndex$ = this.http
        .get<SearchIndexEntry[]>('assets/docs/search-index.json')
        .pipe(shareReplay(1));
    } else {
      // No hacer nada
    }

    return this.searchIndex$;
  }

  search(query: string, limit = 20): Observable<SearchIndexEntry[]> {
    const normalizedQuery = this.normalize(query);

    if (!normalizedQuery) {
      return of([]);
    } else {
      const activeVersion = this.versionService.activeVersion;
      return this.getSearchIndex().pipe(
        map((entries) => {
          return entries
            .filter((entry) => !entry.version || entry.version === activeVersion)
            .map((entry) => ({
              entry,
              score: this.calculateScore(entry, normalizedQuery)
            }))
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score || a.entry.pageTitle.localeCompare(b.entry.pageTitle, 'es', { sensitivity: 'base' }))
            .slice(0, limit)
            .map((item) => item.entry);
        })
      );
    }
  }

  private calculateScore(entry: SearchIndexEntry, normalizedQuery: string): number {
    const title = this.normalize(entry.pageTitle);
    const description = this.normalize(entry.description);
    const pubName = this.normalize(entry.pubName);
    const programa = this.normalize(entry.programa);
    const scope = this.normalize(entry.scope);
    const keywords = Array.isArray(entry.keywords)
      ? entry.keywords.map((keyword) => this.normalize(keyword))
      : [];
    const searchableText = this.normalize(entry.searchableText);

    let score = 0;

    if (title === normalizedQuery) {
      score += 120;
    } else {
      if (title.includes(normalizedQuery)) {
        score += 80;
      } else {
        // No hacer nada
      }
    }

    if (pubName === normalizedQuery) {
      score += 100;
    } else {
      if (pubName.includes(normalizedQuery)) {
        score += 70;
      } else {
        // No hacer nada
      }
    }

    if (programa === normalizedQuery) {
      score += 90;
    } else {
      if (programa.includes(normalizedQuery)) {
        score += 60;
      } else {
        // No hacer nada
      }
    }

    if (description.includes(normalizedQuery)) {
      score += 40;
    } else {
      // No hacer nada
    }

    if (scope.includes(normalizedQuery)) {
      score += 20;
    } else {
      // No hacer nada
    }

    keywords.forEach((keyword) => {
      if (keyword === normalizedQuery) {
        score += 50;
      } else {
        if (keyword.includes(normalizedQuery)) {
          score += 25;
        } else {
          // No hacer nada
        }
      }
    });

    if (searchableText.includes(normalizedQuery)) {
      score += 10;
    } else {
      // No hacer nada
    }

    return score;
  }

  private normalize(text: string | null | undefined): string {
    return String(text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }
}
