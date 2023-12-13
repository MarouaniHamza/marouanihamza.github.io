import { NgModule } from "@angular/core";
import { DemoDetailsComponent } from "../demo-details/demo-details.component";
import { DemosRoutingModule } from "./demos-routing.module";
import { CommonModule } from "@angular/common";
import { DemosComponent } from "../demos.component";

@NgModule({
    declarations:[
        DemoDetailsComponent,
        DemosComponent
    ],
    imports:[
        CommonModule ,DemosRoutingModule
    ],
})
export class DemosModule{

}