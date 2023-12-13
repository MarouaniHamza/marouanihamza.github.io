import { NgModule } from "@angular/core";
import { WorksComponent } from "../works.component";
import { Router, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: WorksComponent}
]

@NgModule({
    declarations: [
        WorksComponent
    ],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WorksModule{

}