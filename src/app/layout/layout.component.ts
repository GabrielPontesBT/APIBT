import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('pageTransition', [
      transition('* <=> *', [
        group([
          query(':leave', [
            style({ opacity: 1, transform: 'translateY(0)' }),
            animate('350ms ease-out', style({ opacity: 0, transform: 'translateY(8px)' }))
          ], { optional: true }),

          query(':enter', [
            style({ opacity: 0, transform: 'translateY(-8px)' }),
            animate('450ms 80ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: true }),
        ]),
      ]),
    ]),
  ]
})
export class LayoutComponent {

  isHome = false;
  sidebarCollapsed = false;

  @HostBinding('@pageTransition')
  get routeAnimState() {
    return this.router.url;
  }

  constructor(private title: Title, private router: Router) {
    this.updateIsHome(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.updateIsHome(event.urlAfterRedirects);
      });
  }

  private updateIsHome(url: string): void {
    const cleanUrl = (url || '').split('?')[0].split('#')[0];
    this.isHome = cleanUrl === '/' || cleanUrl === '';
  }

  onChildActivate(cmp: any) {
    const applyTitle = () => {
      if (this.isHome) {
        this.title.setTitle('API Banking');
        return;
      }

      const raw = (cmp && (cmp.pageTitle ?? cmp.title)) || '';
      const text = String(raw).trim();

      if (text) {
        this.title.setTitle(`API | ${text}`);
      } else {
        this.title.setTitle('API Banking');
      }
    };

    setTimeout(applyTitle);
  }
}
