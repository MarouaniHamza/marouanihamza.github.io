import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDetailsComponent } from '../demo-details/demo-details.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
  {path:'',children: [
    {path:'demo-details', children: [
        {path:':demoPath', component: DemoDetailsComponent},
      ]},
    ]
  },
  {path:'error', component: ErrorPageComponent, data: {message: 'Page not found !'}},
  {path:'**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
