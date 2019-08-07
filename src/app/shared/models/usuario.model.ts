export class Usuario {
    id?: number;
    nome?: string;
    username?: string;
    email?: string;
    password?: string;
    ativo?: boolean;
    habilitado?: boolean;
    expirado?: boolean;
    bloqueado?: boolean;
    niveis?: Array<string>;

    constructor() {
        this.niveis = new Array();
    }
}
