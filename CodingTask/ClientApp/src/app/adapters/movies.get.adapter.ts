import { MovieResponse } from "src/app/services/movie.get.response";
import { Movie } from "src/app/models/movie.model";
import { Injectable } from "@angular/core";
import { DataAdapter } from "src/app/shared/data.adapter";

@Injectable({
    providedIn: 'root'
})

export class GetMoviesResponseAdapter implements DataAdapter<MovieResponse, Movie>{
    map(item: MovieResponse): Movie {
     return new Movie(
item.id,
item.language,
item.location,
item.plot,
item.poster,
item.soundEffects,
item.stills,
item.title,
item.imdbId,
item.listingType,
item.imbRating
     )
    }
}