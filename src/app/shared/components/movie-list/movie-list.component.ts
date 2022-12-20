import { Component, Input } from '@angular/core';

import { MovieSearchResult } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [{ provide: Window, useValue: window }]
})
export class MovieListComponent {
  @Input() displayAll = false;
  @Input() layout: 'grid' | 'list' = 'grid';
  @Input() limit = 6;
  @Input() movies: MovieSearchResult[];

  trackById(index: number, movie: MovieSearchResult): number {
    return movie.id;
  }
}
