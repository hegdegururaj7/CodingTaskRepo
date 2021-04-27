import { Movie } from "src/app/models/movie.model";
import { Input, ViewChild, OnInit, Component } from "@angular/core";
import { MatTableDataSource, MatSort, Sort } from "@angular/material/";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    @Input('dataSource') searchResults: Movie[];
    displayedColumns: string[] = ['language', 'location', 'plot', 'poster',
        'soundEffects', 'stills', 'title', 'imdbId', 'listingType', 'imdbRating', 'options']

    dataSource: MatTableDataSource<Movie>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(
        private route: Router
    ) { }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Movie>();
        this.dataSource.data = this.searchResults;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (data, attr) => data[attr]
    }

    sortData(sort: Sort) {
        this.dataSource.data = this.dataSource.data.sort((a, b) => {
            const isDesc = sort.direction === 'desc';
            switch (sort.active) {
                case 'language': return this.compareData(a.language, b.language, isDesc);
                case 'location': return this.compareData(a.location, b.location, isDesc);
                case 'title': return this.compareData(a.title, b.title, isDesc);
                case 'imdbId': return this.compareData(a.imdbId, b.imdbId, isDesc);
                case 'listingType': return this.compareData(a.listingType, b.listingType, isDesc);
                case 'imdbRating': return this.compareData(a.imbdRating, b.imbdRating, isDesc);
                case 'plot': return this.compareData(a.plot, b.plot, isDesc);
                case 'soundEffects': return this.compareData(a.plot, b.plot, isDesc);

            }
        });
    }

    private compareData(firstValue: string | string[], secondValue: string | string[], isDesc: Boolean): number {
        return (firstValue < secondValue ? 1 : -1) * (isDesc ? -1 : 1);
    }

    private OnViewDetails(row: Movie): void {
        const urlConstantsDetails = "details";

        this.route.navigate([urlConstantsDetails + "/" + row.Id]);
    }
}