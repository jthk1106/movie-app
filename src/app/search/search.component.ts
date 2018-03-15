import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _movie: MovieService) { }
    
  ngOnInit() {
  }
  
  newsearch(){
    this._movie.getData()
      .subscribe( data => {
        //this.data=data.results
        console.log(data)
      })
  }

}
