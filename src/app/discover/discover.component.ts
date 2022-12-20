import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Genre, GenresService } from '../shared/services/genres.service';
import { MovieSearchResponse, MoviesService } from '../shared/services/movies.service';
import { Rating, RatingsService } from '../shared/services/ratings.service';
import { WatchProvider, WatchProviderService } from '../shared/services/watch-provider.service';

interface DiscoverForm {
  certification: FormControl<string | null>;
  with_genres: FormControl<string | null>;
  with_watch_providers: FormControl<string | null>;
  year: FormControl<string | null>;
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  form: FormGroup<DiscoverForm>;
  genres$: Observable<Genre[]>;
  ratings$: Observable<Rating[]>;
  searchResults$: Observable<MovieSearchResponse>;
  watchProviders$: Observable<WatchProvider[]>

  constructor(
    private genresSvc: GenresService,
    private moviesSvc: MoviesService,
    private ratingsSvc: RatingsService,
    private watchProvidersSvc: WatchProviderService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup<DiscoverForm>({
      certification: new FormControl(this.moviesSvc.getCurrentDiscoverCriteria().certification || ''),
      with_genres: new FormControl(this.moviesSvc.getCurrentDiscoverCriteria().with_genres || ''),
      with_watch_providers: new FormControl(this.moviesSvc.getCurrentDiscoverCriteria().with_watch_providers || ''),
      year: new FormControl(this.moviesSvc.getCurrentDiscoverCriteria().year || '', Validators.pattern(/^\d{4}$/))
    });

    this.genres$ = this.genresSvc.genres$;

    this.ratings$ = this.ratingsSvc.ratings$;

    this.searchResults$ = this.moviesSvc.discover();

    this.watchProviders$ = this.watchProvidersSvc.watchProviders$;
  }

  goToPage(nextPage: number): void {
    this.moviesSvc.changeSearchCriteria({ 
      certification: this.moviesSvc.getCurrentDiscoverCriteria().certification,
      page: nextPage,
      type: 'discover',
      with_genres: this.moviesSvc.getCurrentDiscoverCriteria().with_genres,
      with_watch_providers: this.moviesSvc.getCurrentDiscoverCriteria().with_watch_providers,
      year: this.moviesSvc.getCurrentDiscoverCriteria().year
    });
  }

  onSubmit(): void {
    const data = this.form.value;
    const criteria = {
      certification: data.certification!,
      page: 1,
      type: 'discover',
      with_genres: data.with_genres!,
      with_watch_providers: data.with_watch_providers!,
      year: data.year!
    };

    this.moviesSvc.changeSearchCriteria(criteria);
  }
}