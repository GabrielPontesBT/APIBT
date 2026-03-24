import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import {
  trigger, transition, style, animate, query, group
} from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   // sigue siendo SOLO <router-outlet>
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeFadeSlide', [
      transition('* <=> *', [
        // versión simple (sin forzar position) para no tocar layout
        group([
          query(':leave', [
            animate('140ms ease-out',
              style({ opacity: 0, transform: 'translateY(0.25rem)' }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(0.375rem)' }),
            animate('200ms 40ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: true }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  // Dispara la animación en el host sin tocar el template
  @HostBinding('@routeFadeSlide') routeAnimState = 'init';

  constructor(private titleSvc: Title, private router: Router) {
    // Cambiar el estado en cada navegación para forzar * => *
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.routeAnimState = e.urlAfterRedirects ?? e.url ?? String(Date.now());
      });
  }

  onActivate(component: unknown) {
    const c: any = component as any;
    let pageTitle: string | undefined =
      typeof c?.pageTitle === 'string' ? c.pageTitle :
      typeof c?.pageTitle === 'function' ? c.pageTitle() : undefined;

    if (!pageTitle && c?.constructor && typeof c.constructor.pageTitle === 'string') {
      pageTitle = c.constructor.pageTitle;
    }

    if (!pageTitle) return;
    setTimeout(() => this.titleSvc.setTitle(`API | ${pageTitle}`), 0);
  }
}
