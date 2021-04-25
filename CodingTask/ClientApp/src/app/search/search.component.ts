import { Component,EventEmitter, OnInit , Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatAutocompleteTrigger} from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls :['./search.component.scss']
})
export class SearchComponent implements OnInit {
 movieSearch: FormGroup;
retrievedMoviesSearch: string[];
@Output() searchEnteredEvent = new EventEmitter<string>();
@ViewChild(MatAutocompleteTrigger, {static:false}) autoComplete: MatAutocompleteTrigger;
 constructor(
     private formBuilder: FormBuilder
 ){}
    ngOnInit(): void {
        this.movieSearch = this.formBuilder.group({
            title: new FormControl('', [Validators.required])
        });

        this.movieSearch.controls.title.valueChanges.pipe(
        debounceTime(500), distinctUntilChanged(),
        startWith(''),
        filter(term => term.length> 2 || term.length === 0)).subscribe((result) =>{
this.retrievedMoviesSearch =[];
this.searchEnteredEvent.emit(result);
        });
    }

    onClick(item:string){
        this.autoComplete.closePanel();
        this.retrievedMoviesSearch =[];
        this.searchEnteredEvent.emit(item);
        this.movieSearch.controls.title.setValue(item);
    }
}
