export class ConfigService {
    apiPath: string;

    // tslint:disable-next-line: no-empty
    constructor() {

    }

    getApiPath() {
        return "http://192.168.0.25:8080/aplicacao/";
    }
}
