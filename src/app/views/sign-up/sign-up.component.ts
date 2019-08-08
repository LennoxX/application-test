import { RouterExtensions } from "nativescript-angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthService } from "~/app/shared/services/auth.service";
import { Usuario } from "~/app/shared/models/usuario.model";

import * as Toast from "nativescript-toast"; import { Page } from "tns-core-modules/ui/page";
@Component({
    selector: "sign-up",
    moduleId: module.id,
    templateUrl: "./sign-up.component.html"
})

export class SignUpComponent {

    usuario: Usuario;
    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: RouterExtensions,
                private authService: AuthService, private _page: Page) {
        _page.on("loaded", (args) => {
            if (this._page.android) {
                this._page.android.setFitsSystemWindows(true);
            }
        });
        this.signUpForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            nome: [null, [Validators.required, Validators.minLength(5)]],
            password: [null, [Validators.required, Validators.minLength(5)]],
            username: [null, [Validators.required, Validators.minLength(5)]],
            passwordConfirm: [null, Validators.required]
        }, { validator: this.checkPasswords });
    }

    checkPasswords(group: FormGroup) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.passwordConfirm.value;

        return pass === confirmPass ? null : { notSame: true };
    }

    register() {

        this.usuario = Object.assign(new Usuario(), this.signUpForm.value);
        this.usuario.niveis.push("ADMIN");
        console.log(this.usuario);
        this.authService.register(this.usuario).subscribe(
            (res) => {
                this.router.navigate(["/sign-in"]);
                Toast.makeText("Usuário Criado com Sucesso").show();
            },
            (err) => {
                Toast.makeText("Erro ao criar o usuário").show();
            }
        );
    }
}
