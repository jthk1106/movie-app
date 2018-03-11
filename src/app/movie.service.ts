import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
    url: string = 'https://api.themoviedb.org/3/movie/550?';
    api: string = 'api_key=24b66ea3942efb3f0f7190dd1dff99cf';


  constructor(private http: HttpClient) { }
    
    getData(){
        return this.http.get( this.url+this.api )
    }

}
