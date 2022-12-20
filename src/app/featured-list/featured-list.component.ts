import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { MovieSearchResponse, MoviesService, SearchCriteria } from '../shared/services/movies.service';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  data$: Observable<MovieSearchResponse>;
  title: string;
  url: string;

  constructor(
    private moviesSvc: MoviesService,
    private router: Router
  ) { }

  private buildSearchCriteria(page: number, type: string): SearchCriteria {
    return { page, type };
  }

  ngOnInit(): void {
    this.url = this.router.url.replace('/', '');

    switch(this.url) {
      case 'now-playing':
        this.data$ = this.moviesSvc.getNowPlaying();
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(1, 'nowPlaying'));
        this.title = 'Now Playing';
        break;
      case 'popular':
        this.data$ = this.moviesSvc.getPopular();
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(1, 'popular'));
        this.title = 'Popular';
        break;
      case 'trending':
        this.data$ = this.moviesSvc.getTrending();
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(1, 'trending'));
        this.title = 'Trending';
        break;
      case 'upcoming':
        this.data$ = this.moviesSvc.getUpcoming();
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(1, 'upcoming'));
        this.title = 'Upcoming';
        break;
    }
  }

  goToPage(nextPage: number): void {
    switch(this.url) {
      case 'now-playing':
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(nextPage, 'nowPlaying'));
        break;
      case 'popular':
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(nextPage, 'popular'));
        break;
      case 'trending':
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(nextPage, 'trending'));
        break;
      case 'upcoming':
        this.moviesSvc.changeSearchCriteria(this.buildSearchCriteria(nextPage, 'upcoming'));
        break;
    }
  }
}