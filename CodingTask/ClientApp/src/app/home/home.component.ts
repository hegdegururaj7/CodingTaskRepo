import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from "src/app/models/movie.model";
import { MoviesService } from "src/app/services/movies.service";
import { SearchComponent } from "src/app/search/search.component";
import { SearchResultsComponent } from "src/app/search-results/search-results.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(SearchComponent, { static: false }) searchComponent: SearchComponent;
  @ViewChild(SearchResultsComponent, { static: false }) searchTableComponent: SearchResultsComponent;

  private searchResults: Movie[];
  private filteredLanguages: string[];
  constructor(
    private movieService: MoviesService
  ) {

  }


  onSearch(searchTerms: string) {
    this.movieService.getMoviesList(searchTerms).subscribe(data => {
      this.searchComponent.retrievedMoviesSearch = data.map(x => x.title);
      this.filteredLanguages = data.map(x => x.language);
      this.filteredLanguages = this.filteredLanguages.filter((n, i) => this.filteredLanguages.indexOf(n) === i);
      this.searchResults = data;
      this.searchTableComponent.dataSource.data = data;
    },
      (error) => {
        throw (error);
      }
    );
  }

  onFilter(filteredLanguage: string[]) {
    if(filteredLanguage.length === 0){
        this.searchTableComponent.dataSource.data = this.searchResults;
    return;
    }
    const filteredDataSource =
      this.searchResults.filter(x => filteredLanguage.find(y => y === x.language));
    this.searchTableComponent.dataSource.data = filteredDataSource;
  }
}
