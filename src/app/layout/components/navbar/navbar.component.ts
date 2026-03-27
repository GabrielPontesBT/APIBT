import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Release } from '../../../features/api-docs/pages/releases/releases.data';
import { ReleasesService } from '../../../features/api-docs/services/releases.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

  isDarkMode = document.body.classList.contains('dark-mode');
  rotate = false;
  releasesOpen = false;
  releases: Release[] = [];

  constructor(
    private router: Router,
    private releasesService: ReleasesService
  ) {
    this.releasesService.getReleases().subscribe(releases => {
      this.releases = releases;
    });
  }

  toggleReleases(event: MouseEvent): void {
    event.stopPropagation();
    this.releasesOpen = !this.releasesOpen;
  }

  closeReleases(): void {
    this.releasesOpen = false;
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.releasesOpen = false;
  }

  toggleTheme() {
    this.rotate = true;
    const html = document.documentElement;
    const body = document.body;

    const applyTheme = () => {
      this.isDarkMode = !this.isDarkMode;
      body.classList.toggle('dark-mode', this.isDarkMode);
      html.classList.toggle('dark-mode', this.isDarkMode);
    };

    // View Transitions API: toma un screenshot del estado actual, aplica el cambio
    // y hace crossfade a nivel de compositor — todos los elementos simultáneamente.
    if ((document as any).startViewTransition) {
      html.classList.add('theme-view-transition');
      (document as any).startViewTransition(applyTheme).finished.then(() => {
        html.classList.remove('theme-view-transition');
      });
    } else {
      applyTheme();
    }

    setTimeout(() => { this.rotate = false; }, 320);
  }

  goHome() {

    // Si ya estamos en la home solo scrollea arriba
    if (this.router.url === '/' || this.router.url === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Si estamos en otra página, navega al home
    this.router.navigateByUrl('/');
  }

}
