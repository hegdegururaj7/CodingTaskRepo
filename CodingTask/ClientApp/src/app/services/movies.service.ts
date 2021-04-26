import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "src/app/models/movie.model";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { GetMoviesResponseAdapter } from "src/app/adapters/movies.get.adapter";
import { GetMoviesResponse } from "src/app/services/movies.get.response";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
    providedIn: 'root'
})
export class MoviesService{
    private baseResourceUrl='/api/v1/Movie/';
    constructor( private httpClient: HttpClient,
    private getMoviesResponseAdapter: GetMoviesResponseAdapter) {}

    getMoviesList(terms: string): Observable<Movie[]>{
        const parameters={
titleTerm: terms
        };
const movieConstant ='Movies';
const searchUrlConstants ='Search';
let command = null;
if(terms === '' || !terms){
     command = (this.baseResourceUrl + movieConstant);
     return this.httpClient.get<GetMoviesResponse>(command).
    pipe(map((result :GetMoviesResponse) => 
    result.movies.map(movie => this.getMoviesResponseAdapter.map(movie)),
    catchError (ex => throwError(ex))
    ));
}
else{
     command = (this.baseResourceUrl + searchUrlConstants);
     return this.httpClient.get<GetMoviesResponse>(command, {params:parameters}).
    pipe(map((result :GetMoviesResponse) => 
    result.movies.map(movie => this.getMoviesResponseAdapter.map(movie)),
    catchError (ex => throwError(ex))
    ));
}
    
  }
}