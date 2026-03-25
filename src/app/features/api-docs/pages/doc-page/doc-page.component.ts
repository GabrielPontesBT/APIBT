/**
 * doc-page.component.ts
 *
 * Carga dinámicamente un documento de documentación a partir del slug de la URL,
 * obtiene su JSON desde assets mediante DocsService y expone el contenido al template
 * para renderizarlo mediante los componentes visuales reutilizables del proyecto.
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { DocPage } from '../../../../core/models/doc-page.model';
import { DocsService } from '../../services/docs.service';

@Component({
    selector: 'app-doc-page',
    templateUrl: './doc-page.component.html',
    styleUrls: ['./doc-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DocPageComponent implements OnInit {
  page$!: Observable<DocPage | null>;

  constructor(
    private route: ActivatedRoute,
    private docsService: DocsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.page$ = this.route.url.pipe(
      map((segments: UrlSegment[]) => {
        return segments
          .map((segment) => segment.path)
          .filter((segment) => !!segment)
          .join('/');
      }),
      switchMap((slug) => {
        if (!slug) {
          return of(null);
        } else {
          return this.docsService.getPage(slug).pipe(
            catchError((error) => {
              console.error(`No se pudo cargar el documento para el slug: ${slug}`, error);
              return of(null);
            })
          );
        }
      }),
      tap((page) => {
        if (page?.pageTitle) {
          this.titleService.setTitle(`API | ${page.pageTitle}`);
        }
      })
    );
  }
}
