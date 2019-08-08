export class ConfigService {

    constructor() {

    }
    apiPath: string;

    getApiPath() {
        return "http://192.168.0.25:8080/aplicacao/";
    }
}
