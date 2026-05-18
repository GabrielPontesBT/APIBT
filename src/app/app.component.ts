import { Component, HostBinding, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeFadeSlide', [
      transition('* <=> *', [])   // no-op, mantiene el trigger sin efectos visuales
    ]),
  ],
  standalone: false
})
export class AppComponent implements OnInit {

  @HostBinding('@routeFadeSlide') routeAnimState = '/';

  private animRunning = false;
  private pendingOverlay: HTMLElement | null = null;
  private pendingDir: 'push' | 'back' | null = null;
  private prevUrl = '/';

  constructor(
    private titleSvc: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  ngOnInit() {
    this.prevUrl = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const nextUrl = event.url;
        const wasHome = this.isRoot(this.prevUrl);
        const willBeHome = this.isRoot(nextUrl);

        if (wasHome !== willBeHome && !this.animRunning && isPlatformBrowser(this.platformId)) {
          this.animRunning = true;
          this.pendingDir = wasHome ? 'push' : 'back';
          this.pendingOverlay = this.createOverlay(this.pendingDir);
        }
      }

      if (event instanceof NavigationEnd) {
        const nextUrl = event.urlAfterRedirects;
        this.routeAnimState = nextUrl;
        this.prevUrl = nextUrl;

        if (this.pendingOverlay) {
          const overlay = this.pendingOverlay;
          const dir = this.pendingDir!;
          this.pendingOverlay = null;
          this.pendingDir = null;

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.slideOverlayOut(overlay, dir);
            });
          });
        }
      }
    });
  }

  private isRoot(url: string): boolean {
    const u = (url || '').split('?')[0].split('#')[0];
    return u === '/' || u === '';
  }

  private createOverlay(dir: 'push' | 'back'): HTMLElement {
    const vw = window.innerWidth;
    const bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color').trim() || '#f5f5f7';

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${bgColor};
      z-index: 99999;
      pointer-events: none;
      will-change: transform;
    `;

    // Empieza fuera de pantalla
    const startX = dir === 'push' ? vw : -vw;
    overlay.style.transform = `translate3d(${startX}px, 0, 0)`;

    document.body.appendChild(overlay);
    overlay.getBoundingClientRect(); // fuerza reflow

    // Slide IN cubriendo la página actual
    overlay.style.transition = `transform 350ms cubic-bezier(0.4, 0, 0.2, 1)`;
    overlay.style.transform = `translate3d(0, 0, 0)`;

    return overlay;
  }

  private slideOverlayOut(overlay: HTMLElement, dir: 'push' | 'back'): void {
    if (!overlay.parentElement) {
      this.animRunning = false;
      return;
    }

    const vw = window.innerWidth;
    const exitX = dir === 'push' ? -vw : vw;

    overlay.style.transition = `transform 350ms cubic-bezier(0.4, 0, 0.2, 1)`;
    overlay.style.transform = `translate3d(${exitX}px, 0, 0)`;

    overlay.addEventListener('transitionend', () => {
      overlay.remove();
      this.animRunning = false;
    }, { once: true });
  }

  onActivate(component: unknown) {
    const c = component as any;
    const pageTitle =
      typeof c?.pageTitle === 'string' ? c.pageTitle :
        typeof c?.title === 'string' ? c.title : undefined;
    if (!pageTitle) return;
    this.titleSvc.setTitle(`API | ${pageTitle}`);
  }
}
