import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from "src/app/search/search.component";
import { SearchResultsComponent } from "src/app/search-results/search-results.component";
import { MoviesService } from "src/app/services/movies.service";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { GetMoviesResponseAdapter } from "src/app/adapters/movies.get.adapter";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DetailsComponent } from "src/app/details/details.component";
import { SlicersComponent } from "src/app/slicers/slicers.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    DetailsComponent,
    SlicersComponent
  ],
  imports: [
     HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'details/:id', component: DetailsComponent },
    ])
  ],
  providers: [MoviesService,GetMoviesResponseAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
