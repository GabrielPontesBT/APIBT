import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Release } from '../../../features/api-docs/pages/releases/releases.data';
import { ReleasesService } from '../../../features/api-docs/services/releases.service';
import { VersionService } from '../../../core/services/version.service';

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
  isOnReleasePage = false;
  releases: Release[] = [];
  showReleases = true;

  constructor(
    private router: Router,
    private releasesService: ReleasesService,
    private versionService: VersionService
  ) {
    this.releasesService.getReleases().subscribe(releases => {
      this.releases = releases;
    });

    this.versionService.activeVersion$.subscribe(version => {
      this.showReleases = version !== 'bpay';
      if (!this.showReleases) this.releasesOpen = false;
    });

    this.isOnReleasePage = this.router.url.startsWith('/releases/');
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(e => {
      this.isOnReleasePage = e.urlAfterRedirects.startsWith('/releases/');
    });

    // Si el usuario no eligió tema manualmente, seguir los cambios del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches);
      }
    });
  }

  private applyTheme(isDark: boolean): void {
    this.isDarkMode = isDark;
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark-mode', isDark);
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

    const doToggle = () => {
      this.applyTheme(!this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    };

    // View Transitions API: toma un screenshot del estado actual, aplica el cambio
    // y hace crossfade a nivel de compositor — todos los elementos simultáneamente.
    if ((document as any).startViewTransition) {
      html.classList.add('theme-view-transition');
      (document as any).startViewTransition(doToggle).finished.then(() => {
        html.classList.remove('theme-view-transition');
      });
    } else {
      doToggle();
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
