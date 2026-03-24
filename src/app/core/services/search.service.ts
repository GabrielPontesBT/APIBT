import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PageIndex {
  url: string;
  pageTitle: string;
  description: string;
  pubName: string;
  programa: string;
  scope: string;
  hasBackendConfig: boolean;
  backendText: string;
  backendConfig: any[];
}

export interface SearchResult {
  url: string;
  snippet: string;
  pubName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private pages: PageIndex[] = [];
  private indexUrl = 'assets/docs/index.json';

  constructor(private http: HttpClient) {
    this.http.get<{ pages: PageIndex[] }>(this.indexUrl)
      .subscribe(
        resp => this.pages = resp.pages,
        err  => console.error('No se pudo cargar index.json', err)
      );
  }

  private normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  search(query: string): SearchResult[] {
    if (!this.pages.length || !query.trim()) {
      return [];
    }

    // 1) Separa la query en términos
    const terms = this
      .normalizeText(query)
      .split(/\s+/)
      .filter(t => t);

    const results: SearchResult[] = [];

    for (const page of this.pages) {
      // 2) Arma y normaliza el haystack
      const originalText = [
        page.pageTitle,
        page.description,
        page.pubName,
        page.programa,
        page.scope,
        page.backendText,
        ...page.backendConfig.map(cfg => JSON.stringify(cfg))
      ].join(' ');
      const haystack = this.normalizeText(originalText);

      // 3) AND lógico con substring
      if (!terms.every(term => haystack.includes(term))) {
        continue;
      }

      // 4) Preparamos palabras para extraer contexto
      const words = haystack.split(/\s+/);
      const originalWords = originalText.split(/\s+/);

      // 5) Encontramos el primer término que haga match parcial
      let snippet = '';
      for (const term of terms) {
        const idx = words.findIndex(w => w.includes(term));
        if (idx !== -1) {
          const start = Math.max(0, idx - 5);
          const end   = Math.min(words.length, idx + 6);
          snippet = `... ${originalWords.slice(start, end).join(' ')} ...`;
          break;
        }
      }

      results.push({
        url: page.url,
        snippet,
        pubName: page.pubName
      });
    }

    return results;
  }
}
