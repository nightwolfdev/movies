import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { MovieSearchResponse, MoviesService, SearchCriteria } from '../shared/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults$: Observable<MovieSearchResponse>;

  constructor(
    private moviesSvc: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];

      if (!query) {
        this.router.navigateByUrl('/home');
      } else {
        this.moviesSvc.changeSearchCriteria({ 
          page: 1,
          query,
          type: 'search'
        });

        this.searchResults$ = this.moviesSvc.search();
      }
    });
  }

  getCurrentSearchCriteria(): SearchCriteria {
    return this.moviesSvc.getCurrentSearchCriteria();
  }

  goToPage(nextPage: number): void {
    this.moviesSvc.changeSearchCriteria({
      page: nextPage,
      query: this.getCurrentSearchCriteria().query,
      type: 'search'
    });
  }
}
