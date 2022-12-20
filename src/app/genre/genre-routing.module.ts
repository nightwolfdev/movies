import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreComponent } from './genre.component';

const routes: Routes = [
  {
    path: ':id',
    component: GenreComponent,
    title: 'View Movies By Genre'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
