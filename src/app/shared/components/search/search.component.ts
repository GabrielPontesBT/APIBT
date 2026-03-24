import { Component, ElementRef, HostListener } from '@angular/core';
import { SearchService, SearchResult } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query = '';
  results: SearchResult[] = [];
  searchDone = false;
  isFocused = false;

  constructor(
    private searchService: SearchService,
    private elRef: ElementRef
  ) {}

  search() {
    if (!this.query.trim()) {
      return this.clearResults();
    }

    this.results = this.searchService.search(this.query);
    this.searchDone = true;
  }

  clearResults() {
    this.query = '';
    this.results = [];
    this.searchDone = false;
    this.isFocused = false;
  }

  goTo(url: string) {
    console.log('Redirigiendo a:', url);
    window.location.assign(url);
  }

  focusSearchInput() {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) {
      input.focus();
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clearResults();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    this.clearResults();
    this.blurInput();
  }

  @HostListener('document:keydown.control.f', ['$event'])
  handleCtrlF(event: KeyboardEvent) {
    event.preventDefault();
    this.focusSearchInput();
  }

  blurInput() {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) {
      input.blur();
    }
  }

}
