import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/api-docs/api-docs.module').then((m) => m.ApiDocsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    enableViewTransitions: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
