import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  info: any;
  search: string;

  constructor(public _movie: MovieService, private _favorite: FavoritesService, private _save: SaveService) { }

  ngOnInit() {
  }

  newsearch(){
    this._movie.getData(this.search)
      .subscribe( (data: any) => {
        console.log(data)
        this.info = data.results
        console.log(this.info)
      })
  }
  /*
  newsearch(search){
    console.log('search:', search)
    this._movie.getData(search)
      .subscribe( (data: any) => {
        console.log(data)
        this.info = data.results
        console.log(this.info)
      })
  }
  */

  savemovie(movie){
    this._favorite.addMovie(movie)
    console.log(movie.id)
    console.log(movie.title)
    delete movie.id
    console.log(movie.id)
    return this._save.saveMovie(movie)
      .subscribe(
        response => console.log(response, 'response')
      )
  }
}
/*
loginSubmit(){
  console.log(this.user);
  this._user.login(this.user)
      .subscribe(
          userRes => { console.log(userRes, "res")
          sessionStorage.setItem('userId', userRes.userId)
          sessionStorage.setItem('token', userRes.token)
          //sessionStorage.setItem(userRes.token)
          })
  this.router.navigate(['/search']);
}

/*
searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
        this.data = response.results
        console.log(this.data)
      }
      )
  }
*/
