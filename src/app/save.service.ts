import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@Injectable()
export class SaveService {
baseURL: any = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
sessionid: any;
sessiontoken: any;

  constructor(private _http: HttpClient, private _home: HomeComponent) { }

    saveMovie(movie){
        this.sessionid = this._home.user.userId
        console.log(this.sessionid)
        this.sessiontoken = this._home.user.token
        console.log(this.sessiontoken)
        
        return this._http.post(this.baseURL+this.sessionid+'/movies?access_token='+this.sessiontoken, movie)
    }
}



/*
ex:
this.http.post(url, movie)
---
http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/5ab8a3c05bd0481c093bdd54/movies?access_token=axoA0njnZOL8NJNm6GNdqJZF7Jed0KWkQxaPlMB19nZIv4sPc6Lj6I7GuEX8Fhlg
*/