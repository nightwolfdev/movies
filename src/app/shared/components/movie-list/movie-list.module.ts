import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list.component';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MovieListModule { }
