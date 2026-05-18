import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionService } from './version.service';

interface PageIndex {
  slug: string;
  pageTitle: string;
  description: string;
  pubName: string;
  programa: string;
  scope: string;
  keywords: string[];
  searchableText: string;
  version: string;
}

interface NavNode {
  type: string;
  slug: string;
  label: string;
  children?: NavNode[];
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
  private slugLabelMap = new Map<string, string>();
  private _pendingHighlight: string | null = null;

  setPendingHighlight(term: string): void { this._pendingHighlight = term; }
  consumeHighlight(): string | null {
    const t = this._pendingHighlight;
    this._pendingHighlight = null;
    return t;
  }

  constructor(private http: HttpClient, private versionService: VersionService) {
    this.http.get<PageIndex[]>('assets/docs/search-index.json').subscribe({
      next: pages => { this.pages = pages; },
      error: err => console.error('No se pudo cargar search-index.json', err)
    });

    this.versionService.activeVersion$.subscribe(version => {
      this.slugLabelMap.clear();
      this.http.get<NavNode[]>(`assets/navigation/sidebar-${version}.json`).subscribe({
        next: tree => this.buildSlugLabelMap(tree),
        error: () => {}
      });
    });
  }

  private buildSlugLabelMap(nodes: NavNode[]): void {
    for (const node of nodes) {
      if (node.slug && node.label) {
        this.slugLabelMap.set(node.slug, node.label);
      }
      if (node.children?.length) {
        this.buildSlugLabelMap(node.children);
      }
    }
  }

  private normalize(text: string): string {
    return String(text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  private slugToBreadcrumb(slug: string, pageTitle: string): string {
    const segments = slug.split('/');
    const parents: string[] = [];

    for (let i = 1; i < segments.length; i++) {
      const partialSlug = segments.slice(0, i).join('/');
      const mapped = this.slugLabelMap.get(partialSlug);
      if (mapped) {
        // Quitar sufijo de código de país si existe (ej: "Argentina AR" → "Argentina")
        parents.push(mapped.replace(/\s[A-Z]{2}$/, '').trim());
      } else {
        // Fallback: capitalizar desde el slug
        const cleaned = segments[i - 1].replace(/-[a-z]{2}$/i, '');
        parents.push(cleaned.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
      }
    }

    return [...parents, pageTitle].join(' > ');
  }

  private highlight(text: string, terms: string[]): string {
    if (!text) return '';
    let result = text;
    for (const term of terms) {
      if (!term) continue;
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      result = result.replace(regex, '<strong>$1</strong>');
    }
    return result;
  }

  private extractSnippet(text: string, terms: string[], contextLen = 80): string {
    if (!text) return '';
    const normalizedText = this.normalize(text);
    let bestIndex = -1;
    for (const term of terms) {
      const idx = normalizedText.indexOf(term);
      if (idx !== -1 && (bestIndex === -1 || idx < bestIndex)) {
        bestIndex = idx;
      }
    }
    if (bestIndex === -1) return '';
    const start = Math.max(0, bestIndex - contextLen / 2);
    const end = Math.min(text.length, bestIndex + contextLen);
    const raw = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    return this.highlight(raw, terms);
  }

  private buildResult(page: PageIndex, terms: string[]): SearchResult {
    const breadcrumb = this.slugToBreadcrumb(page.slug, page.pageTitle);

    const snippetSource =
      this.extractSnippet(page.description, terms) ||
      this.extractSnippet(page.searchableText, terms) ||
      this.extractSnippet(page.pubName, terms);

    return {
      url: `/${page.version}/${page.slug}`,
      snippet: snippetSource,
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
    if (!this.pages.length || !query.trim()) return [];

    const activeVersion = this.versionService.activeVersion;
    const terms = this.normalize(query).split(/\s+/).filter(t => t.length > 0);

    return this.pages
      .filter(page => page.version === activeVersion)
      .filter(page => {
        const slugText = page.slug.replace(/\//g, ' ').replace(/-/g, ' ');
        const haystack = this.normalize([
          slugText,
          page.pageTitle,
          page.pubName,
          page.programa,
          page.scope,
          page.description,
          page.searchableText,
        ].join(' '));
        return terms.every(term => haystack.includes(term));
      })
      .map(page => this.buildResult(page, terms));
  }
}
