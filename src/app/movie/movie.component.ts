import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie, MoviesService } from '../shared/services/movies.service';
import { Rating, RatingsService } from '../shared/services/ratings.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  displayAllCast = false;
  displayAllCrew = false;
  limit = 6;
  movie$: Observable<Movie>;
  rating$: Observable<Rating>;
  ratingModalOpen = false;
  youtubeTrailerOpen = false;

  constructor(
    private domSanitizer: DomSanitizer,
    private moviesSvc: MoviesService,
    private ratingsSvc: RatingsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap(params => this.moviesSvc.getMovie(+params.get('id')!))
    );
  }

  convertRuntime(runtime: number): string {
    if (runtime === 0) {
      return '';
    }

    const hours = Math.floor(runtime / 60);
    const minutes = Math.floor(runtime % 60);

    return `${hours > 0 ? hours + 'h' : ''} ${minutes > 0 ? minutes + 'm' : ''}`;
  }

  getRating(rating: string): void {
    this.ratingModalOpen = true;
    this.rating$ = this.ratingsSvc.getRating(rating);
  }

  viewAllCast(): void {
    this.displayAllCast = !this.displayAllCast;
  }

  viewAllCrew(): void {
    this.displayAllCrew = !this.displayAllCrew;
  }

  sanitizeYouTubeUrl(id: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?controls=0`);
  }
}