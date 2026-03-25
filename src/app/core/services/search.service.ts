import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Fuse from 'fuse.js';

interface PageIndex {
  slug: string;
  pageTitle: string;
  description: string;
  pubName: string;
  programa: string;
  scope: string;
  keywords: string[];
  searchableText: string;
}

export interface SearchResult {
  url: string;
  snippet: string;
  pubName: string;
  programa: string;
  breadcrumb: string;
  pageTitle: string;
  highlightedBreadcrumb: string;
  highlightedPubName: string;
  highlightedPrograma: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private pages: PageIndex[] = [];
  private fuse!: Fuse<PageIndex>;
  private indexUrl = 'assets/docs/search-index.json';

  constructor(private http: HttpClient) {
    this.http.get<PageIndex[]>(this.indexUrl).subscribe({
      next: pages => {
        this.pages = pages;
        this.fuse = new Fuse(pages, {
          keys: [
            { name: 'pageTitle',      weight: 0.4 },
            { name: 'pubName',        weight: 0.3 },
            { name: 'programa',       weight: 0.2 },
            { name: 'scope',          weight: 0.1 },
          ],
          threshold: 0.35,       // 0 = exacto, 1 = todo coincide
          includeScore: true,
          ignoreLocation: true,
          useExtendedSearch: false,
        });
      },
      error: err => console.error('No se pudo cargar search-index.json', err)
    });
  }

  private normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private slugToBreadcrumb(slug: string, pageTitle: string): string {
    const segments = slug.split('/');
    const parents = segments.slice(0, -1).map(segment =>
      segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    );
    return [...parents, pageTitle].join(' > ');
  }

  /** Envuelve las ocurrencias de los términos en <strong> para resaltado */
  private highlight(text: string, terms: string[]): string {
    if (!text) return '';
    let result = text;
    for (const term of terms) {
      if (!term) continue;
      // Escapa caracteres especiales de regex
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      result = result.replace(regex, '$1');
    }
    return result;
  }

  private buildResult(page: PageIndex, terms: string[]): SearchResult {
    const breadcrumb = this.slugToBreadcrumb(page.slug, page.pageTitle);
    return {
      url: '/' + page.slug,
      snippet: '',
      pubName: page.pubName,
      programa: page.programa,
      breadcrumb,
      pageTitle: page.pageTitle,
      highlightedBreadcrumb: this.highlight(breadcrumb, terms),
      highlightedPubName: this.highlight(page.pubName, terms),
      highlightedPrograma: this.highlight(page.programa, terms),
    };
  }

  search(query: string): SearchResult[] {
    if (!this.pages.length || !query.trim()) {
      return [];
    }

    const terms = this.normalizeText(query).split(/\s+/).filter(t => t);

    // ── 1. Búsqueda exacta por substring (campos clave + searchableText) ──
    const exactSlugs = new Set<string>();
    const exactResults: SearchResult[] = [];

    for (const page of this.pages) {
      const slugText = page.slug.replace(/\//g, ' ').replace(/-/g, ' ');
      const haystack = this.normalizeText([
        slugText,
        page.pageTitle,
        page.pubName,
        page.programa,
        page.scope,
        page.searchableText
      ].join(' '));

      if (terms.every(term => haystack.includes(term))) {
        exactSlugs.add(page.slug);
        exactResults.push(this.buildResult(page, terms));
      }
    }

    // Si hay resultados exactos, devolverlos directamente
    if (exactResults.length > 0) {
      return exactResults;
    }

    // ── 2. Fuzzy search solo si no hubo ningún resultado exacto ──
    const fuzzyResults: SearchResult[] = [];
    if (this.fuse) {
      const fuseHits = this.fuse.search(query);
      for (const hit of fuseHits) {
        fuzzyResults.push(this.buildResult(hit.item, terms));
      }
    }

    return fuzzyResults;
  }
}
