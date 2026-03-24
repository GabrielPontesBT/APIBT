/**
 * search-box.component.ts
 *
 * Maneja el input de búsqueda de documentación, consulta el índice generado
 * mediante SearchService y expone resultados filtrados para navegar
 * rápidamente a una página desde el frontend.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { SearchIndexEntry } from '../../../../core/models/search-index-entry.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  searchControl = new FormControl('', { nonNullable: true });
  results$: Observable<SearchIndexEntry[]> = of([]);

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {
    this.results$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      debounceTime(180),
      distinctUntilChanged(),
      switchMap((query) => this.searchService.search(query || '', 12))
    );
  }

  hasText(value: string | null | undefined): boolean {
    return !!String(value || '').trim();
  }

  selectResult(result: SearchIndexEntry): void {
    this.router.navigate(['/', result.slug]);
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }
}
