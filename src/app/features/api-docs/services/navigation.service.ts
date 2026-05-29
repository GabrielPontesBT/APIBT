/**
 * navigation.service.ts
 *
 * Carga el sidebar correspondiente a la versión activa. Cachea por versión
 * para evitar múltiples peticiones al mismo archivo.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, switchMap } from 'rxjs';
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

  isSlugNew(slug: string): Observable<boolean> {
    return this.getNavigationTree().pipe(
      map(tree => this.findNodeBySlug(tree, slug)?.isNew ?? false)
    );
  }

  private findNodeBySlug(nodes: NavigationNode[], slug: string): NavigationNode | undefined {
    for (const node of nodes) {
      if (node.slug === slug) return node;
      if (node.children?.length) {
        const found = this.findNodeBySlug(node.children, slug);
        if (found) return found;
      }
    }
    return undefined;
  }
}
