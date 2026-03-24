import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() newBadgeSrc = 'assets/image/nuevo.svg';

  constructor(private cdr: ChangeDetectorRef) {}

  get isNew(): boolean {
    return /-NUEVO\s*$/i.test(this.title || '');
  }

  get cleanTitle(): string {
    return (this.title || '').replace(/\s*-NUEVO\s*$/i, '').trim();
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = (window.scrollY || document.documentElement.scrollTop) > 20;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      this.cdr.markForCheck();
    }
  }
}
