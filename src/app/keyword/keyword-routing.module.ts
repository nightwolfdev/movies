import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeywordComponent } from './keyword.component';

const routes: Routes = [
  {
    path: ':id',
    component: KeywordComponent,
    title: 'View Movies By Keyword'
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
export class KeywordRoutingModule { }
