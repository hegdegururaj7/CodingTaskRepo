import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ViewChild, OnInit, Component } from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls:['./details.component.scss']
})
export class DetailsComponent implements OnInit  {
    detailsFormGroup: FormGroup;
constructor(
     private formBuilder: FormBuilder,
    private  route: ActivatedRoute,
    private movieService: MoviesService,
 ){}
 ngOnInit(): void {
        this.detailsFormGroup = this.formBuilder.group({
            language: new FormControl(''),
            location: new FormControl(''),
            title: new FormControl(''),
            plot: new FormControl(''),
            poster: new FormControl(''),
            stills: new FormControl(''),
            soundEffects: new FormControl(''),
            imdbId: new FormControl(''),
            listingType: new FormControl(''),
            imbdRating: new FormControl('')
        });
 this.movieService.getMoviesList(null).subscribe(movieList =>{
    const  selectedMovieDetail =  movieList.filter(x => x.Id.toString() === this.route.snapshot.params.id);
     this.detailsFormGroup.patchValue(selectedMovieDetail[0]);
     this.detailsFormGroup.disable();
 });
 }
};
