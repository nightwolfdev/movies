import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

import { FeaturedListRoutingModule } from './featured-list-routing.module';
import { FeaturedListComponent } from './featured-list.component';


@NgModule({
  declarations: [
    FeaturedListComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    MovieListModule,
    PaginationModule,
    FeaturedListRoutingModule
  ]
})
export class FeaturedListModule { }
