import { SearchComponent } from "src/app/search/search.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SearchResultsComponent } from "src/app/search-results/search-results.component";
import { Movie } from "src/app/models/movie.model";

describe('SearchComponent', () => {
    let component: SearchResultsComponent;
    let fixture: ComponentFixture<SearchResultsComponent>;
const testMovieList = [
      {
        "Id": 1,
        "language": "some language",
        "location": "some location",
        "plot": "some plot",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
        "soundEffects": [
          "DOLBY",
          "DTS"
        ],
        "stills": [
          "https://i.imgur.com/3fJ1P48.gif",
          "https://i.imgur.com/j6ECXmD.gif",
          "https://i.imgur.com/v0ooIH0.gif"
        ],
        "title": "test tile",
        "imdbId": "some imdid",
        "listingType": "some showing",
        "imbdRating": "7.4"
      }
  ];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [SearchComponent]
        }).compileComponents();
    }));
    beforeEach((() => {
        fixture = TestBed.createComponent(SearchResultsComponent);
        component = fixture.componentInstance;
        component.searchResults = testMovieList;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show our movies data', () => {
    const ourDomTableUnderTest = document.querySelector('table#testTable');
 
    const moviesInTable = Array.from(
      ourDomTableUnderTest.getElementsByClassName('mat-row')
    );
 
    moviesInTable.forEach(movie => {
      const movieLanguage = movie
        .getElementsByClassName('mat-column-language')
        .item(0).textContent;
      const movieLocation = movie
        .getElementsByClassName('mat-column-location')
        .item(0).textContent;
      const moviePlot = movie
        .getElementsByClassName('mat-column-plot')
        .item(0).textContent;
         const moviePoster = movie
        .getElementsByClassName('mat-column-poster')
        .item(0).textContent;
         const movieSoundEffects = movie
        .getElementsByClassName('mat-column-soundEffects')
        .item(0).textContent;
         const movieStills = movie
        .getElementsByClassName('mat-column-stills')
        .item(0).textContent;
        const movieTitle = movie
        .getElementsByClassName('mat-column-title')
        .item(0).textContent;
         const movieListingType= movie
        .getElementsByClassName('mat-column-listingType')
        .item(0).textContent;
        const movieImbId = movie
        .getElementsByClassName('mat-column-imdbId')
        .item(0).textContent;
          const movieImbdRating = movie
        .getElementsByClassName('mat-column-imbRating')
        .item(0).textContent;
 
      expect(testMovieList).toContain(
        jasmine.objectContaining({
          language: movieLanguage,
          location: movieLocation,
          soundEffects: movieSoundEffects,
          poster: moviePoster,
          plot: moviePlot,
          title: movieTitle,
          stills: movieStills,
          imdbId:movieImbdRating,
          listingType: movieListingType,
          imbRating:movieImbdRating
        })
      );
    });
  });
});