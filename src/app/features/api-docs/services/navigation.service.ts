/**
 * navigation.service.ts
 *
 * Carga el sidebar correspondiente a la versión activa. Cachea por versión
 * para evitar múltiples peticiones al mismo archivo.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { NavigationNode } from '../../../core/models/navigation-node.model';
import { VersionService } from '../../../core/services/version.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private cache = new Map<string, Observable<NavigationNode[]>>();

  constructor(
    private http: HttpClient,
    private versionService: VersionService
  ) {}

  getNavigationTree(): Observable<NavigationNode[]> {
    return this.versionService.activeVersion$.pipe(
      switchMap(version => {
        if (!this.cache.has(version)) {
          const req$ = this.http
            .get<NavigationNode[]>(`assets/navigation/sidebar-${version}.json`)
            .pipe(shareReplay(1));
          this.cache.set(version, req$);
        }
        return this.cache.get(version)!;
      })
    );
  }
}
