import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  standalone: false
})
export class ScrollToTopComponent implements OnInit, OnDestroy {
  visible = false;
  private readonly THRESHOLD = 150;
  private win: Window | null = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.win = this.document.defaultView;
    }
  }

  ngOnInit(): void {
    this.win?.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    this.win?.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = (): void => {
    this.visible = (this.win?.scrollY ?? 0) > this.THRESHOLD;
  };

  scrollToTop(): void {
    this.win?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
