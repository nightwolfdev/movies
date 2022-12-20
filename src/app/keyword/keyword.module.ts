import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

import { KeywordRoutingModule } from './keyword-routing.module';
import { KeywordComponent } from './keyword.component';

@NgModule({
  declarations: [
    KeywordComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    LoadingModule,
    MovieListModule,
    PaginationModule,
    KeywordRoutingModule
  ]
})
export class KeywordModule { }
