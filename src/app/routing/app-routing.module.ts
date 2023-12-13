import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { DemosRoutingModule } from '../demos/modules/demos-routing.module';

const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () =>
      import('../demos/modules/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'works',
    loadChildren: () =>
      import('../works/modules/works.module').then((m) => m.WorksModule),
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('../favorite/modules/favorite.module').then(
        (m) => m.FavoriteModule,
      ),
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: { message: 'Page not found !' },
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [DemosRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
