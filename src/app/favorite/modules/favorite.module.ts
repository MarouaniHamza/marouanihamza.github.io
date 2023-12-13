import { NgModule } from '@angular/core';
import { FavoriteComponent } from '../favorite.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: FavoriteComponent }];

@NgModule({
  declarations: [FavoriteComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteModule {}
