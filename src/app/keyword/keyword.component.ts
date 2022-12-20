import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, combineLatest, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MovieSearchResponse, MoviesService } from '../shared/services/movies.service';
import { KeywordsService } from '../shared/services/keywords.service';
import { HttpErrorResponse } from '@angular/common/http';

interface Data extends MovieSearchResponse {
  keywordName: string;
}

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent implements OnInit {
  data$: Observable<Data>;
  id: number;
  errorModalClosed = true;
  errorMsg = '';

  constructor(
    private keywordsSvc: KeywordsService,
    private moviesSvc: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = +params.get('id')!;

        this.moviesSvc.changeSearchCriteria({ id: this.id, page: 1, type: 'keyword' });

        return combineLatest([
          this.keywordsSvc.getKeywordName(this.id),
          this.moviesSvc.getMoviesByKeyword()
        ]).pipe(
          map(([keywordName, searchResponse]) => ({ ...searchResponse, keywordName }))
        )
      }),
      catchError((error: HttpErrorResponse) => {
        this.errorModalClosed = false;
        this.errorMsg = error.error.status_message;
        return throwError(() => new Error(error.error.status_message));
      })
    );
  }

  goToPage(nextPage: number): void {
    this.moviesSvc.changeSearchCriteria({ id: this.id, page: nextPage, type: 'keyword' });
  }
}