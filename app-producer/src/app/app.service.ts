import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    schema = {'name': '$1', 'color': '$2', 'password': '$3'};

    // TODO get this from a mounted file
    url = 'http://192.168.99.100:8080/data';

    postData(data) {
        this.schema.name = data.name;
        this.schema.color = data.color;
        this.schema.password = data.password;
        const body = JSON.stringify(this.schema);
        console.log(body);
        return this.http.post(this.url, {data: data});
    }

}
