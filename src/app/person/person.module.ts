import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksModule } from '../shared/components/links/links.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MovieListModule } from '../shared/components/movie-list/movie-list.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    LinksModule,
    LoadingModule,
    MovieListModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
