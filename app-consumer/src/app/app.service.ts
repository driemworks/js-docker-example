import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    url = 'http://192.168.99.100:8080/data';

    constructor(private httpClient: HttpClient) { }

    retrieveMessage() {
        return this.httpClient.get(this.url);
    }

}
