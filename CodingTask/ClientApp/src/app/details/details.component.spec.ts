import { SearchComponent } from "src/app/search/search.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from "@angular/platform-browser";

import { MoviesService } from "src/app/services/movies.service";
import { DetailsComponent } from "src/app/details/details.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { NO_ERRORS_SCHEMA } from "@angular/core";

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
         let formBuilderStub = () => ({
            group: object => ({valid:true}),
              array:  array => ({})
            });

            let formGroupStub = () => ({
            valid: Boolean => (true),
            pristine:Boolean => (false),
            getRawValue: () => ({})
            });

        TestBed.configureTestingModule({
            schemas:[NO_ERRORS_SCHEMA],

            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatMenuModule,
                MatIconModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                CommonModule,
                MatInputModule,
                MatTooltipModule
            ],
            declarations: [DetailsComponent],
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
                },
                {
                    provide: FormBuilder, useClass: formBuilderStub
                },
                {
                    provide: FormGroup, useClass: formBuilderStub
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
                fixture.detectChanges();
fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
});
    });

    it('should make movie service call', () => {
        fixture.detectChanges();
        spyOn(movieService, 'getMoviesList').and.callThrough();
    });


});