import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';


@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    LoadingModule,
    MovieListModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
