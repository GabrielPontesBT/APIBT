import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) { super(); }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const fromData = this.getDeepestDataTitle(snapshot.root);
    const fromRouteTitle = this.buildTitle(snapshot);
    const fallback = this.urlFallback(snapshot.url);

    const finalTitle = fromData || fromRouteTitle || fallback || 'Inicio';
    this.title.setTitle(`API | ${finalTitle}`);
  }

  private getDeepestDataTitle(route: ActivatedRouteSnapshot | null): string | null {
    let r = route, val: string | null = null;
    while (r) {
      if (r.data?.['pageTitle']) val = r.data['pageTitle'];
      r = r.firstChild ?? null;
    }
    return val;
  }

  private urlFallback(url: string): string {
    const last = url.split('/').filter(Boolean).pop() ?? '';
    return decodeURIComponent(last).replace(/-/g, ' ').trim();
  }
}
