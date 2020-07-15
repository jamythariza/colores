import {Component, OnInit} from '@angular/core';
import {MovieService} from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent  {
  movies : Movie[]= [];

  constructor(
    protected movieService: MovieService
  ) {
  }

  cargar() {
    debugger;
    console.log('hola');
    this.movieService.getMovies()
    .subscribe(
      (data) => { // Success
        this.movies = data["data"];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}


