/**
 * search-box.component.ts
 *
 * Maneja el input de búsqueda de documentación, consulta el índice generado
 * mediante SearchService y expone resultados filtrados para navegar
 * rápidamente a una página desde el frontend.
 */

import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SearchService, SearchResult } from '../../../../core/services/search.service';

const HISTORY_KEY = 'search_history';
const MAX_HISTORY  = 5;

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: false
})
export class SearchBoxComponent {
  @Output() searchFocused = new EventEmitter<void>();

  query         = '';
  results: SearchResult[] = [];
  searchDone    = false;
  isFocused     = false;
  recentSearches: string[] = [];

  constructor(
    private searchService: SearchService,
    private router: Router,
    private elRef: ElementRef,
    private sanitizer: DomSanitizer
  ) {
    this.recentSearches = this.loadHistory();
  }

  // ── Búsqueda ────────────────────────────────────────────────────────────

  search(): void {
    if (!this.query.trim()) {
      this.results    = [];
      this.searchDone = false;
      return;
    }
    this.results    = this.searchService.search(this.query);
    this.searchDone = true;
  }

  // ── Navegación ──────────────────────────────────────────────────────────

  goTo(url: string): void {
    this.saveHistory(this.query.trim());
    this.router.navigateByUrl(url);
    this.clearResults();
  }

  searchFromHistory(term: string): void {
    this.query = term;
    this.search();
  }

  removeFromHistory(term: string, event: Event): void {
    event.stopPropagation();
    this.recentSearches = this.recentSearches.filter(s => s !== term);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(this.recentSearches));
  }

  // ── Historial ───────────────────────────────────────────────────────────

  private loadHistory(): string[] {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch {
      return [];
    }
  }

  private saveHistory(term: string): void {
    if (!term) return;
    const updated = [term, ...this.recentSearches.filter(s => s !== term)]
      .slice(0, MAX_HISTORY);
    this.recentSearches = updated;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  }

  // ── HTML seguro para resaltado ──────────────────────────────────────────

  safeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // ── Estado ──────────────────────────────────────────────────────────────

  clearResults(): void {
    this.query      = '';
    this.results    = [];
    this.searchDone = false;
    this.isFocused  = false;
  }

  get showHistory(): boolean {
    return this.isFocused && !this.query.trim() && this.recentSearches.length > 0;
  }

  // ── Focus / Blur ────────────────────────────────────────────────────────

  focusInput(): void {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) input.focus();
  }

  blurInput(): void {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) input.blur();
  }

  // ── Listeners globales ──────────────────────────────────────────────────

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.clearResults();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.clearResults();
    this.blurInput();
  }

  @HostListener('document:keydown.control.f', ['$event'])
  handleCtrlF(event: Event): void {
    event.preventDefault();
    this.focusInput();
  }
}
