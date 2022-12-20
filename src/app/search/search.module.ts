import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    MovieListModule,
    PaginationModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
