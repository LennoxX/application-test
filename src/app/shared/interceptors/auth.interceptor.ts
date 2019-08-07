import { AuthService } from "./../services/auth.service";

import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;
        if (this.authService.getToken()) {
            authRequest = req.clone({
                setHeaders: {
                    "Authorization" : this.authService.getToken()
                }
            });

            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }

}
