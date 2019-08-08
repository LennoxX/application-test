import { RouterExtensions } from 'nativescript-angular/router';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class AuthGuard implements CanActivate {

    constructor(private router: RouterExtensions, private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.getToken() != null) {
            return true;
        } else {
            this.router.navigate(["sign-in"]);

            return false;
        }

    }
}
