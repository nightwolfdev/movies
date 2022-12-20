import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { HomeRoutingModule } from './home-routing.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    LoadingModule,
    MovieListModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
