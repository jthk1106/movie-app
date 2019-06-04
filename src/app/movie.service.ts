import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieService {
    url: string = 'https://api.themoviedb.org/3/search/movie?';
    api: string = 'api_key=24b66ea3942efb3f0f7190dd1dff99cf';
    query: string = '&query=';
    //search: string;
    //https://api.themoviedb.org/3/search/movie?api_key=24b66ea3942efb3f0f7190dd1dff99cf
    //https://api.themoviedb.org/3/search/movie?api_key=24b66ea3942efb3f0f7190dd1dff99cf&query=fight%20club


  constructor(private http: HttpClient) { }

    getData(search){
        console.log(search);
        return this.http.get( this.url + this.api + this.query + search )
    }
    /*
    getData(search){
        console.log(this.search);
        return this.http.get( this.url + this.api + this.query + this.search )
    }
    */

}
