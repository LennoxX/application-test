import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./../models/usuario.model";

import * as appSettings from "tns-core-modules/application-settings";
import { Token } from "../models/token.model";

export class AuthService {

    constructor(private httpClient: HttpClient,
                private configService: ConfigService) {

    }

    login(usuario: Usuario) {
        return this.httpClient.post(`${this.configService.getApiPath()}auth/signin`, usuario);
    }

    validateToken() {
        return this.httpClient.post("http://192.168.0.25:8080/auth/valid/token", this.getToken());

    }

    clearSession() {
        appSettings.clear();
    }

    saveSession(token: Token) {
        this.setToken(token.accessToken);
        this.setUsername(token.usuario.username);
        this.setEmail(token.usuario.email);
    }

    setToken(token: string) {
        appSettings.setString("token", token);
    }

    getToken() {
        return appSettings.getString("token");
    }

    setEmail(email: string) {
        appSettings.setString("email", email);
    }

    getEmail() {
        return appSettings.getString("email");
    }

    setUsername(username: string) {
        appSettings.setString("username", username);
    }

    getUsername() {
        return appSettings.getString("username");
    }

    register(usuario: Usuario) {
        return this.httpClient.post(`${this.configService.getApiPath()}api/usuario`, usuario);
    }
}
