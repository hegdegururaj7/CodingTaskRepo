import { SearchComponent } from "src/app/search/search.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                MatMenuModule,
                MatIconModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                CommonModule,
                MatAutocompleteModule,
                MatInputModule,
                MatSortModule,
                MatTableModule,
                MatOptionModule,
                MatSelectModule,
                MatTooltipModule,
                MatExpansionModule,
                MatListModule,
                MatGridListModule,
            ],
            declarations: [SearchComponent]
        }).compileComponents();
    }));
    beforeEach((() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set form valid given search terms', () => {
        component.movieSearch.controls.title.setValue('some search terms');
        fixture.detectChanges();
        expect(component.movieSearch.valid).toBeTruthy();
    });

    it('should set form invalid given no search terms', () => {
        component.movieSearch.controls.title.setValue('');
        fixture.detectChanges();
        expect(component.movieSearch.valid).toBeFalsy();
    });
});