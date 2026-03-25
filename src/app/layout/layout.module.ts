/**
 * layout.module.ts
 *
 * Declara los componentes estructurales del layout principal de la aplicación,
 * incluyendo navbar, sidebar y contenedor principal, e importa RouterModule
 * para permitir router-outlet y routerLink dentro del layout.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ApiDocsModule } from '../features/api-docs/api-docs.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ApiDocsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
