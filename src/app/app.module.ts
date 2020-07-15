import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { MovieService} from './movie.service'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MovieListComponent}
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
