import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isDarkMode = false;
  rotate = false;

  constructor(private router: Router) {}

  toggleTheme() {
    this.rotate = true;

    setTimeout(() => {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }, 100);

    setTimeout(() => {
      this.rotate = false;
    }, 600);
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
