import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertifyjsService } from './services/alertifyjs.service';
import { MovielistService } from './services/movielist.service';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './pipes/truncate-pipe/truncate-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    NavbarComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AlertifyjsService,MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
