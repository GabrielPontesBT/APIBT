import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RouterAnimationService {

  private renderer: Renderer2;
  private prevUrl = '/';

  constructor(
    private router: Router,
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.init();
  }

  private init() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const currentUrl = e.urlAfterRedirects;
        const wasHome = this.prevUrl === '/' || this.prevUrl === '';
        const isHome = currentUrl === '/' || currentUrl === '';

        if (wasHome && !isHome) {
          this.animatePush();
        } else if (!wasHome && isHome) {
          this.animateBack();
        }

        this.prevUrl = currentUrl;
      });
  }

  private animatePush() {
    if (!isPlatformBrowser(this.platformId)) return;
    const contentArea = document.querySelector('.content-area');
    if (!contentArea) return;

    const outgoing = contentArea.querySelector('app-home') as HTMLElement;
    const incoming = contentArea.querySelector(':not(app-home):not(router-outlet)') as HTMLElement;

    if (!outgoing || !incoming) return;

    this.runPush(outgoing, incoming, -1);
  }

  private animateBack() {
    // implementar si se necesita
  }

  private runPush(outgoing: HTMLElement, incoming: HTMLElement, direction: number) {
    const duration = 400;
    const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';

    const parent = outgoing.parentElement as HTMLElement;
    const parentH = parent.offsetHeight;

    [outgoing, incoming].forEach(el => {
      el.style.position = 'absolute';
      el.style.top = '0';
      el.style.left = '0';
      el.style.width = '100%';
      el.style.willChange = 'transform';
    });

    incoming.style.transform = `translateX(${direction * 100}%)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        outgoing.style.transition = `transform ${duration}ms ${easing}`;
        incoming.style.transition = `transform ${duration}ms ${easing}`;
        outgoing.style.transform = `translateX(${direction * -25}%)`;
        incoming.style.transform = 'translateX(0)';

        setTimeout(() => {
          outgoing.style.position = '';
          outgoing.style.transition = '';
          outgoing.style.transform = '';
          incoming.style.position = '';
          incoming.style.transition = '';
          incoming.style.transform = '';
          incoming.style.willChange = '';
        }, duration + 50);
      });
    });
  }
}
