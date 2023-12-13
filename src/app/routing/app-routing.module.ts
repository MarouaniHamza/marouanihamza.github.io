import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDetailsComponent } from '../demos/demo-details/demo-details.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AppComponent } from '../app.component';
import { DemosRoutingModule } from '../demos/modules/demos-routing.module';
import { DemosComponent } from '../demos/demos.component';
import { WorksComponent } from '../works/works.component';
import { FavoriteComponent } from '../favorite/favorite.component';

const routes: Routes = [
  {path:'demos', loadChildren: () => import('../demos/modules/demos.module').then(m => m.DemosModule) },
  {path:'works', loadChildren: () => import('../works/modules/works.module').then(m => m.WorksModule) },
  {path:'favorite', loadChildren: () => import('../favorite/modules/favorite.module').then(m => m.FavoriteModule) },
  {path:'error', component: ErrorPageComponent, data: {message: 'Page not found !'}},
  {path:'**', redirectTo: '/error'}
];

@NgModule({
  imports: [DemosRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
