/**
 * api-docs-routing.module.ts
 *
 * Define las rutas del módulo de documentación de API, resolviendo la home
 * del módulo y cualquier otra URL como un slug dinámico manejado por
 * DocPageComponent.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPageComponent } from './pages/doc-page/doc-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: DocPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiDocsRoutingModule {}
