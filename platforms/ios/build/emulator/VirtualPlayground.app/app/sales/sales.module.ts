import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SalesRoutingModule } from "./sales-routing.module";
import { SalesComponent } from "./sales.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        SalesRoutingModule
    ],
    declarations: [
        SalesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SalesModule { }
