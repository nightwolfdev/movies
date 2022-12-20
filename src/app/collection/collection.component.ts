import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Collection, MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection$: Observable<Collection>;
  errorModalClosed = true;
  errorMsg = '';

  constructor(
    private moviesSvc: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.collection$ = this.route.paramMap.pipe(
      switchMap(params => this.moviesSvc.getCollection(+params.get('id')!)),
      catchError((error: HttpErrorResponse) => {
        this.errorModalClosed = false;
        this.errorMsg = error.error.status_message;
        return throwError(() => new Error(error.error.status_message));
      })
    );
  }
}