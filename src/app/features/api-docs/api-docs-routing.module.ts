/**
 * api-docs-routing.module.ts
 *
 * Define las rutas del módulo de documentación de API, resolviendo la home
 * del módulo y cualquier otra URL como un slug dinámico manejado por
 * DocPageComponent.
 */

import { inject, NgModule } from '@angular/core';
import { CanActivateFn, Router, RouterModule, Routes } from '@angular/router';
import { map, take } from 'rxjs';
import { DocPageComponent } from './pages/doc-page/doc-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ReleasesPageComponent } from './pages/releases/releases-page.component';
import { ReleasesService } from './services/releases.service';

const latestReleaseGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(ReleasesService).getReleases().pipe(
    take(1),
    map(releases => releases[0]
      ? router.createUrlTree(['releases', releases[0].id])
      : router.createUrlTree(['/'])
    )
  );
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'releases',
    canActivate: [latestReleaseGuard],
    component: ReleasesPageComponent
  },
  {
    path: 'releases/:id',
    component: ReleasesPageComponent,
    title: 'Releases'
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
