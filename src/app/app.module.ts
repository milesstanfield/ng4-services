import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './book.service';
import { ArtistService } from './artist.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
