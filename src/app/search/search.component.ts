import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _movie: MovieService, private _favorite: FavoritesService) { }
  info: any;
  
  
  ngOnInit() {
  }
  
  newsearch(search){
    this._movie.getData(search)
      .subscribe( (data: any) => {
        console.log(data)
        this.info = data.results
        console.log(this.info)
      })
  }
  
  savemovie(movie){
    this._favorite.addMovie(movie)
    
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