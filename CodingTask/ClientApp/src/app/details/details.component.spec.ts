import { SearchComponent } from "src/app/search/search.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { MoviesService } from "src/app/services/movies.service";
import { DetailsComponent } from "src/app/details/details.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common/common";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser/platform-browser";

describe('DetailsComponent', () => {
    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;
    let movieService: MoviesService;

    beforeEach(async(() => {
        let mockMovieServiceStub = () => ({
            getMoviesList: (term) => ({
                subscribe: () => ({})
            })
        });
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatMenuModule,
                MatIconModule,
                BrowserModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                CommonModule,
                MatInputModule,

                MatTooltipModule
            ],
            declarations: [SearchComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            params: {
                                id: 100
                            }
                        }
                    }
                },
                {
                    provide: MoviesService, useClass: mockMovieServiceStub
                }
            ]
        }).compileComponents();
    }));
    beforeEach((() => {
        fixture = TestBed.createComponent(DetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should make movie service call', () => {
        fixture.detectChanges();
        spyOn(movieService, 'getMoviesList').and.callThrough();
    });


});