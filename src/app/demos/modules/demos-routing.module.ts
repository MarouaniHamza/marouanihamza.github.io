import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DemoDetailsComponent } from "../demo-details/demo-details.component";
import { DemosComponent } from "../demos.component";

const routes: Routes = [
    {path:'',children: [
        {path:'demos', component: DemosComponent, children: [
            {path:':demoPath', component: DemoDetailsComponent},
        ]},
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemosRoutingModule{

}