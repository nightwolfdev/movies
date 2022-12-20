import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksComponent } from './links.component';

@NgModule({
  declarations: [
    LinksComponent
  ],
  exports: [
    LinksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LinksModule { }
