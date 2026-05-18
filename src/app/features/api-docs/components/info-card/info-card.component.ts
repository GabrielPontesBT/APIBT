import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss'],
    standalone: false
})
export class InfoCardComponent {
  @Input() description!: string;
  @Input() pubName!: string;
  @Input() modulo?: string;
  @Input() programa!: string;
  @Input() scope!: string;

  constructor(private router: Router) {}

  onDescriptionClick(event: MouseEvent): void {
    const anchor = (event.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#')) return;
    event.preventDefault();
    this.router.navigateByUrl(href);
  }
}
