import { AuthService } from "./shared/services/auth.service";
import { AuthGuard } from "./shared/guards/auth.guard";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthGuard, AuthService, {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
