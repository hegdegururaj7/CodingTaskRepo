
import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from "@angular/core";
@Component({
  selector: 'app-slicers',
  templateUrl: './slicers.component.html',
  styleUrls:['./slicers.component.scss']
})
export class SlicersComponent   {
  @Input() languages: string[];
    @Output() languagesSlicer = new EventEmitter<string[]>();
    
constructor(
 ){}

 onLanguageSelection(event, selectedOption){
const selectedLanguages = selectedOption.selected.map(item => item.value)
this.languagesSlicer.emit(selectedLanguages);
 }
}
