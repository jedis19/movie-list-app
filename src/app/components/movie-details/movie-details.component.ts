import { Component, OnInit } from '@angular/core';
import { AlertifyjsService } from 'src/app/services/alertifyjs.service';
import { movieDetails } from '../../models/movieDetails';
import { MovielistService } from 'src/app/services/movielist.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less'],
  providers: [MovielistService]
})
export class MovieDetailsComponent implements OnInit {

  movie: movieDetails;
  isClicked: boolean = false;
  isRead:boolean=false;
  constructor(
    private alertifyService: AlertifyjsService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {  }

  ngOnInit() {
    //jquery flip button
    $('#js-flip-2').bind('click', function () {
      $('#js-flip-2 .card').toggleClass('flipped');
    });

    $('#flip-ico').bind('click', function () {
      $('#js-flip-2 .card').toggleClass('flipped');
    });

    //getting movie details from list component
    this.activatedRoute.queryParams.subscribe(params => {
      this.movie = JSON.parse(params.movie)
    })

  }


  addToList(imdbRating,originalTitle,posterUrl) {
    this.isClicked = true;
    this.alertifyService.success('The movie has been added to your watch list!')
  }

  removeToList() {
    this.isClicked = false;
    this.alertifyService.error('The movie has been removed from your watch list!')
  }

  readMore(){
    this.isRead =true;
  }







}
