import { Component, HostListener, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: false
})
export class LayoutComponent implements OnDestroy {

  isHome = false;
  sidebarCollapsed = false;
  isCompactViewport = false;
  private sub!: Subscription;
  private readonly transitionClass = 'docs-view-transition-active';

  constructor(
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.updateViewportState();
    this.updateIsHome(this.router.url);

    this.sub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart | NavigationEnd | NavigationCancel | NavigationError =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          if (isPlatformBrowser(this.platformId)) {
            const currentIsHome = this.isHomeRoute(this.router.url);
            const nextIsHome = this.isHomeRoute(event.url);
            const shouldAnimate = currentIsHome !== nextIsHome;
            document.documentElement.classList.toggle(this.transitionClass, shouldAnimate);
          }
          return;
        }

        if (event instanceof NavigationEnd) {
          this.updateIsHome(event.urlAfterRedirects);
          if (this.isCompactViewport && !this.isHome) {
            this.sidebarCollapsed = true;
          }
        }

        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
              document.documentElement.classList.remove(this.transitionClass);
            }, 800);
          }
        }
      });
  }

  private updateIsHome(url: string): void {
    this.isHome = this.isHomeRoute(url);
  }

  private updateViewportState(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const nextCompact = window.innerWidth < 1024;

    if (nextCompact !== this.isCompactViewport) {
      this.isCompactViewport = nextCompact;
      this.sidebarCollapsed = nextCompact;
    }
  }

  private isHomeRoute(url: string): boolean {
    const clean = (url || '').split('?')[0].split('#')[0];
    return clean === '/' || clean === '';
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateViewportState();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  closeSidebarOverlay(): void {
    if (this.isCompactViewport) {
      this.sidebarCollapsed = true;
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.remove(this.transitionClass);
    }
    this.sub?.unsubscribe();
  }

  onChildActivate(cmp: any) {
    const applyTitle = () => {
      if (this.isHome) {
        this.title.setTitle('API Banking');
        return;
      }
      const c = cmp as any;
      const text = String(
        typeof c?.pageTitle === 'string' ? c.pageTitle :
        typeof c?.title === 'string' ? c.title : ''
      ).trim();
      if (text) {
        this.title.setTitle(`API | ${text}`);
      } else {
        this.title.setTitle('API Banking');
      }
    };
    setTimeout(applyTitle);
  }
}
