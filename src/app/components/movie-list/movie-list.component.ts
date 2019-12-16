import { Component, OnInit } from '@angular/core';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';
import { movieDetails } from '../../models/movieDetails';
import { MovielistService } from 'src/app/services/movielist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {

  movies: movieDetails[]
  getmovie: movieDetails
  constructor(private alertifyService: AlertifyjsService, private movieListService: MovielistService, private route: Router) { }

  ngOnInit() {

    this.movieListService.getMovies().subscribe(data => {
      this.movies = data
    })


  }

  send(currentMovie: movieDetails) {
    this.route.navigate(['movie-details'], {
      queryParams: {
        movie: JSON.stringify(currentMovie)
      }
    });
  }

}
