import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _movie: MovieService) { }
  response: any;
  
  
  ngOnInit() {
  }
  
  newsearch(search){
    this._movie.getData(search)
      .subscribe( data => {
        //this.data=data.results
        console.log(data)
        this.response = data.results
        console.log(this.response)
      })
  }
  
  savemovie(){
    
  }

}
/*searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
        this.data = response.results
        console.log(this.data)
      }
      )
  }*/