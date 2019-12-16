import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { movieDetails } from '../models/movieDetails';



@Injectable()
export class MovielistService {
  path = "../../assets/movielist.json"
  
  constructor(private http: HttpClient) { }
  
  getDetails(movie:movieDetails){
    localStorage.setItem('movie',JSON.stringify(movie))
    
  } 
  getMovies(): Observable<movieDetails[]> {
    return this.http.get<movieDetails[]>(this.path)
  }

}
