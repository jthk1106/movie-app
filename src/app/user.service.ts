import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    baseURL: string = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login";
    
    constructor(private _http: HttpClient) {
        
    }

    login(){
        return this._http.post(this.baseURL, {email: "gg@gg.com", password: "gg"});
    }
}