import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any;
  
  constructor(private _favorite: FavoritesService) { 
    this.favoriteMovies = this._favorite.favorites
  }

  ngOnInit() {
  }
  
  
  /*
  newsearch(search){
    this._movie.getData(search)
      .subscribe( (data: any) => {
        console.log(data)
        this.info = data.results
        console.log(this.info)
      })
  }
  */

}
