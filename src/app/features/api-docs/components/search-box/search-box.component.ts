/**
 * search-box.component.ts
 *
 * Maneja el input de búsqueda de documentación, consulta el índice generado
 * mediante SearchService y expone resultados filtrados para navegar
 * rápidamente a una página desde el frontend.
 */

import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService, SearchResult } from '../../../../core/services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: false
})
export class SearchBoxComponent {
  query = '';
  results: SearchResult[] = [];
  searchDone = false;
  isFocused = false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private elRef: ElementRef
  ) {}

  search(): void {
    if (!this.query.trim()) {
      return this.clearResults();
    }
    this.results = this.searchService.search(this.query);
    this.searchDone = true;
  }

  clearResults(): void {
    this.query = '';
    this.results = [];
    this.searchDone = false;
    this.isFocused = false;
  }

  goTo(url: string): void {
    this.router.navigateByUrl(url);
    this.clearResults();
  }

  focusInput(): void {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) input.focus();
  }

  blurInput(): void {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) input.blur();
  }

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
