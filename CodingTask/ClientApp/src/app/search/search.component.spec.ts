import { SearchComponent } from "src/app/search/search.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

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