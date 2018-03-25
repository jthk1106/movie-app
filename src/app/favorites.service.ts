import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {
    favorites: any = [];
    
  constructor() { }

    addMovie(movie){
        console.log(movie);
        this.favorites.push(movie);
    }
}
