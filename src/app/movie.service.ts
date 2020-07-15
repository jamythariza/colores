import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( protected http:HttpClient) { }

  getMovies(){
    debugger;
    let id = document.getElementById('year')['value'];
    return this.http.get('https://jsonmock.hackerrank.com/api/movies/search/?Year='+id);
  }
}
