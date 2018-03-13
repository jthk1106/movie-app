import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private _movie: MovieService) { }

  ngOnInit() {
  }
  

}
