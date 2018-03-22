import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewuserService {
    baseURL: string = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers";
    firstName: any;
    lastName: any;
    email: any;
    password: any;
    
    constructor(private _http: HttpClient) {
        
    }

    register(){
        return this._http.post(this.baseURL, {firstName: '', lastName: ' ', email: '', password: ''});
    }
}