import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MovieSearchResponse, MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying$: Observable<MovieSearchResponse>;
  popular$: Observable<MovieSearchResponse>;
  trending$: Observable<MovieSearchResponse>;
  upcoming$: Observable<MovieSearchResponse>;

  constructor(private moviesSvc: MoviesService) { }

  ngOnInit(): void {
    this.moviesSvc.changeSearchCriteria({ page: 1, type: 'nowPlaying' });
    this.moviesSvc.changeSearchCriteria({ page: 1, type: 'popular' });
    this.moviesSvc.changeSearchCriteria({ page: 1, type: 'trending' });
    this.moviesSvc.changeSearchCriteria({ page: 1, type: 'upcoming' });

    this.nowPlaying$ = this.moviesSvc.getNowPlaying();
    this.popular$ = this.moviesSvc.getPopular();
    this.trending$ = this.moviesSvc.getTrending();
    this.upcoming$ = this.moviesSvc.getUpcoming();
  }
}
