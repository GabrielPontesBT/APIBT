/**
 * doc-page.component.ts
 *
 * Carga dinámicamente un documento de documentación a partir del slug de la URL,
 * obtiene su JSON desde assets mediante DocsService y expone el contenido al template
 * para renderizarlo mediante los componentes visuales reutilizables del proyecto.
 */

import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { DocPage } from '../../../../core/models/doc-page.model';
import { DocsService } from '../../services/docs.service';
import { SearchService } from '../../../../core/services/search.service';
import { VersionService } from '../../../../core/services/version.service';

@Component({
    selector: 'app-doc-page',
    templateUrl: './doc-page.component.html',
    styleUrls: ['./doc-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false,
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('250ms ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('150ms ease-in', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class DocPageComponent implements OnInit, OnDestroy {

  @HostBinding('@fade') fade = true;
  page$!: Observable<DocPage | null>;
  isV4$!: Observable<boolean>;

  private highlightGen   = 0;
  private highlightTimer: ReturnType<typeof setTimeout> | null = null;
  private highlightAnimId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private docsService: DocsService,
    private titleService: Title,
    private searchService: SearchService,
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
    private versionService: VersionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isV4$ = this.route.url.pipe(
      map(segments => segments[0]?.path === 'v4' || segments[0]?.path === 'bpay'),
      distinctUntilChanged()
    );

    this.page$ = this.route.url.pipe(
      map((segments: UrlSegment[]) => {
        const [versionSegment, ...rest] = segments.map(s => s.path).filter(Boolean);
        return {
          version: versionSegment ?? '',
          slug: rest.join('/'),
          highlight: this.searchService.consumeHighlight()
        };
      }),
      tap(({ version }) => {
        if (version) this.versionService.setVersion(version as any);
      }),
      switchMap(({ version, slug, highlight }) => {
        if (!slug || !version) {
          return of({ page: null as DocPage | null, highlight });
        }
        return this.docsService.getPage(slug, version).pipe(
          map(page => ({ page, highlight })),
          catchError((error) => {
            console.error(`No se pudo cargar el documento para el slug: ${version}/${slug}`, error);
            return of({ page: null as DocPage | null, highlight });
          })
        );
      }),
      tap(({ page, highlight }) => {
        if (page?.pageTitle) {
          this.titleService.setTitle(`API | ${page.pageTitle}`);
        }
        this.clearHighlight();
        if (highlight) {
          const gen = ++this.highlightGen;
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              if (gen === this.highlightGen) this.applyHighlight(highlight);
            }, 450);
          });
        }
      }),
      map(({ page }) => page)
    );
  }

  ngOnDestroy(): void {
    this.clearHighlight();
  }

  private clearHighlight(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.highlightTimer !== null) {
      clearTimeout(this.highlightTimer);
      this.highlightTimer = null;
    }
    if (this.highlightAnimId !== null) {
      cancelAnimationFrame(this.highlightAnimId);
      this.highlightAnimId = null;
    }
    document.documentElement.style.removeProperty('--_hl-a');
    if ('highlights' in CSS) {
      (CSS as any).highlights.delete('search-result');
    }
  }

  private applyHighlight(query: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!('highlights' in CSS)) return;

    const terms = query.trim().split(/\s+/).filter(t => t.length >= 2);
    if (!terms.length) return;

    const skip = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA', 'INPUT']);
    const walker = document.createTreeWalker(
      this.el.nativeElement,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent || skip.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(escaped.join('|'), 'gi');
    const ranges: Range[] = [];

    let node: Node | null;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue ?? '';
      regex.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = regex.exec(text)) !== null) {
        const range = document.createRange();
        range.setStart(node, m.index);
        range.setEnd(node, m.index + m[0].length);
        ranges.push(range);
      }
    }

    if (!ranges.length) return;

    (CSS as any).highlights.set('search-result', new (window as any).Highlight(...ranges));
    this.runHighlightAnimation();
  }

  private runHighlightAnimation(): void {
    const FADE_IN  = 300;   // ms
    const HOLD     = 700;   // ms
    const FADE_OUT = 500;   // ms
    const TOTAL    = FADE_IN + HOLD + FADE_OUT;
    const gen      = this.highlightGen;
    const root     = document.documentElement;
    const start    = performance.now();

    const frame = (now: number) => {
      if (gen !== this.highlightGen) {
        root.style.removeProperty('--_hl-a');
        this.highlightAnimId = null;
        return;
      }
      const t = now - start;
      let a: number;
      if      (t < FADE_IN)             a = t / FADE_IN;
      else if (t < FADE_IN + HOLD)      a = 1;
      else if (t < TOTAL)               a = 1 - (t - FADE_IN - HOLD) / FADE_OUT;
      else {
        root.style.removeProperty('--_hl-a');
        (CSS as any).highlights.delete('search-result');
        this.highlightAnimId = null;
        return;
      }
      root.style.setProperty('--_hl-a', Math.max(0, Math.min(1, a)).toFixed(4));
      this.highlightAnimId = requestAnimationFrame(frame);
    };

    root.style.setProperty('--_hl-a', '0');
    this.highlightAnimId = requestAnimationFrame(frame);
  }
}
