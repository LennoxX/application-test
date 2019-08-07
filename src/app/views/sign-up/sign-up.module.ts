import { SignUpComponent } from "./sign-up.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SignUpRoutingModule
    ],
    declarations: [
        SignUpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignUpModule { }
