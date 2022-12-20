import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MovieSearchResponse, MoviesService } from '../shared/services/movies.service';
import { GenresService } from '../shared/services/genres.service';

interface Data extends MovieSearchResponse {
  genreName: string;
}

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  data$: Observable<Data>;
  id: number;

  constructor(
    private genresSvc: GenresService,
    private moviesSvc: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = +params.get('id')!;

        this.moviesSvc.changeSearchCriteria({ id: this.id, page: 1, type: 'genre' });

        return combineLatest([
          this.genresSvc.getGenreName(this.id),
          this.moviesSvc.getMoviesByGenre()
        ]).pipe(
          map(([genreName, searchResponse]) => ({ ...searchResponse, genreName }))
        )
      })
    );
  }

  goToPage(nextPage: number): void {
    this.moviesSvc.changeSearchCriteria({ id: this.id, page: nextPage, type: 'genre' });
  }
}