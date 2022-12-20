import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list.component';

@NgModule({
  declarations: [
    PersonListComponent
  ],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PersonListModule { }
