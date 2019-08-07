import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInRoutingModule } from "./sign-in-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SignInComponent } from "./sign-in.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SignInRoutingModule,
        NativeScriptFormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SignInComponent
    ],
    exports: [FormsModule, ReactiveFormsModule],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignInModule { }
