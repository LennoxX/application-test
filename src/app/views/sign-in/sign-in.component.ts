import { AuthService } from "./../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as Toast from "nativescript-toast";
import * as appSettings from "tns-core-modules/application-settings";
import "rxjs/Rx";
import { Usuario } from "../../shared/models/usuario.model";
import { Token } from "../../shared/models/token.model";

@Component({
    selector: "sign-in",
    moduleId: module.id,
    templateUrl: "./sign-in.component.html"
})

export class SignInComponent implements OnInit{

    signInForm: FormGroup;
    usuario: Usuario;
    isBusy = false;
    constructor(private http: HttpClient,
                private router: Router,
                private formBuilder: FormBuilder,
                private authService: AuthService) {

    }

    ngOnInit(): void {
        this.authService.clearSession();
        this.signInForm = this.formBuilder.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });
        console.log("Token ", this.authService.getToken());
    }

    login() {

        this.isBusy = true;
        this.usuario = Object.assign(new Usuario(), this.signInForm.value);
        this.signInForm.reset();
        this.http.post("http://192.168.0.59:8080/auth/signin", this.usuario)
            .subscribe((result: Token) => {
                this.isBusy = false;
                this.authService.saveSession(result);
                this.router.navigate(["home"]);
            }, (error) => {
                this.isBusy = false;
                Toast.makeText("Usuário ou Senha inválidos").show();
            });
    }

    // tslint:disable-next-line: no-empty
    onBusyChanged($event) {

    }
}
