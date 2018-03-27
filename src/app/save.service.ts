import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaveService {
baseURL: any = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
//sessionid: any;
//sessiontoken: any;

  constructor(private _http: HttpClient) { }

    saveMovie(movie){
        let sessionid = sessionStorage.getItem('userId')
        let sessiontoken = sessionStorage.getItem('token')
        console.log(sessionid)
        console.log(sessiontoken)
        
        return this._http.post(this.baseURL+sessionid+'/movies?access_token='+sessiontoken, movie)
        
    }
}



/*
ex:
this.http.post(url, movie)
---
http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/5ab8a3c05bd0481c093bdd54/movies?access_token=axoA0njnZOL8NJNm6GNdqJZF7Jed0KWkQxaPlMB19nZIv4sPc6Lj6I7GuEX8Fhlg
*/