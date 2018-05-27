import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { ItemStatusPipe } from './item-status.pipe'

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        CustomersRoutingModule
    ],
    declarations: [
        CustomersComponent,
        ItemStatusPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CustomersModule { }
