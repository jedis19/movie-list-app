import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { movieDetails } from '../models/movieDetails';
import { map } from 'rxjs/operators';



@Injectable()
export class MovielistService {

  constructor(private http:HttpClient) { }
  
  path="../../assets/movielist.json"

  getMovies():Observable<movieDetails[]>{
   return this.http.get<movieDetails[]>(this.path)
  }

}
