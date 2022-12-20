import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { LinksModule } from '../shared/components/links/links.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PersonListModule } from '../shared/components/person-list/person-list.module';

import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    LinksModule,
    LoadingModule,
    MovieListModule,
    PersonListModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
