/**
 * navigation.service.ts
 *
 * Carga el archivo sidebar.json desde assets, expone el árbol de navegación
 * para el sidebar y reutiliza la respuesta en memoria para evitar múltiples
 * lecturas innecesarias del mismo archivo.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { NavigationNode } from '../../../core/models/navigation-node.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigation$?: Observable<NavigationNode[]>;

  constructor(private http: HttpClient) {}

  getNavigationTree(): Observable<NavigationNode[]> {
    if (!this.navigation$) {
      this.navigation$ = this.http
        .get<NavigationNode[]>('assets/navigation/sidebar.json')
        .pipe(shareReplay(1));
    } else {
      // No hacer nada
    }

    return this.navigation$;
  }
}
