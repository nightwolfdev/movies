import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';

@NgModule({
  declarations: [
    GenreComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    MovieListModule,
    PaginationModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }
