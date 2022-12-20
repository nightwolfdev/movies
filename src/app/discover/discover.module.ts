import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';


@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    LoadingModule,
    MovieListModule,
    PaginationModule,
    ReactiveFormsModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
