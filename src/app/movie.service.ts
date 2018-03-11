import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
    url: string = 'https://api.themoviedb.org/3/search/movie?';
    
    api: string = 'api_key=24b66ea3942efb3f0f7190dd1dff99cf';
    block1: string = '&language=en-US&query=';
    search: string;
    block2: string = '&page=1&include_adult=false';
    //https://api.themoviedb.org/3/search/movie?api_key=24b66ea3942efb3f0f7190dd1dff99cf&language=en-US&query=Fight%20Club&page=1&include_adult=false

  constructor(private http: HttpClient) { }
    
    getData(){
        return this.http.get( this.url+this.search+this.api )
    }

}
