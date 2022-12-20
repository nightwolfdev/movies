import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Genre } from './genres.service';

export interface Collection {
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  parts: MovieSearchResult[];
  poster_path: string;
}

export interface Keyword {
  id: number;
  name: string;
}

export interface MovieCast {
  character: string;
  id: number;
  name: string;
  profile_path: string;
}

export interface MovieCrew {
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

export interface MoviePerson {
  id: number;
  name: string;
  profile_path: string;
  title: string;
}

export interface MovieSearchResponse {
  page: number;
  results: MovieSearchResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieSearchResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  credits: {
    cast: MoviePerson[];
    crew: MoviePerson[];
  };
  external_ids: {
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
  };
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  keywords: Keyword[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  rating: string;
  release_date: string;
  revenue: number;
  runtime: number;
  similar: MovieSearchResponse;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  youtubeTrailerId: string;
}

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  credits: {
    cast: MovieCast[];
    crew: MovieCrew[];
  };
  external_ids: {
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
  };
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  keywords: {
    keywords: Keyword[];
  }
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  release_dates: {
    results: {
      iso_3166_1: string;
      release_dates: {
        certification: string;
        type: number;
      }[];
    }[];
  };
  revenue: number;
  runtime: number;
  similar: MovieSearchResponse;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: Video[];
  };
  vote_average: number;
  vote_count: number;
}

export interface SearchCriteria {
  certification?: string;
  id?: number;
  page?: number;
  query?: string;
  type: string;
  with_genres?: string;
  with_watch_providers?: string;
  year?: string;
}

export interface Video {
  key: string;
  name: string;
  site: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _discoverCriteria = new BehaviorSubject<SearchCriteria>({ type: 'discover' });
  private _genreCriteria = new BehaviorSubject<SearchCriteria>({ type: 'genre' });
  private _keywordCriteria = new BehaviorSubject<SearchCriteria>({ type: 'keyword' });
  private _nowPlayingCriteria = new BehaviorSubject<SearchCriteria>({ type: 'nowPlaying' });
  private _popularCriteria = new BehaviorSubject<SearchCriteria>({ type: 'popular' });
  private _searchCriteria = new BehaviorSubject<SearchCriteria>({ type: 'search' });
  private _trendingCriteria = new BehaviorSubject<SearchCriteria>({ type: 'trending' });
  private _upcomingCriteria = new BehaviorSubject<SearchCriteria>({ type: 'upcoming' });

  constructor(private http: HttpClient) { }

  private sortByReleaseDate(a: MovieSearchResult, b: MovieSearchResult): number {
    return a.release_date > b.release_date ? 1 : ((b.release_date > a.release_date) ? -1 : 0);
  }

  changeSearchCriteria(criteria: SearchCriteria): void {
    switch (criteria.type) {
      case 'discover':
        this._discoverCriteria.next(criteria);
        break;
      case 'genre':
        this._genreCriteria.next(criteria);
        break;
      case 'keyword':
        this._keywordCriteria.next(criteria);
        break;
      case 'nowPlaying':
        this._nowPlayingCriteria.next(criteria);
        break;
      case 'popular':
        this._popularCriteria.next(criteria);
        break;
      case 'search':
        this._searchCriteria.next(criteria);
        break;
      case 'trending':
        this._trendingCriteria.next(criteria);
        break;
      case 'upcoming':
        this._upcomingCriteria.next(criteria);
    }
  }

  discover(): Observable<MovieSearchResponse> {
    return this._discoverCriteria.asObservable().pipe(
      filter(criteria => !!criteria.certification || !!criteria.page || !!criteria.with_genres || !!criteria.with_watch_providers || !!criteria.year),
      switchMap(criteria => this.http.get<MovieSearchResponse>(`discover/movie?certification.lte=${criteria.certification}&certification_country=US&include_adult=false&page=${criteria.page}&region=US&watch_region=US&with_genres=${criteria.with_genres}&with_watch_providers=${criteria.with_watch_providers}&year=${criteria.year || ''}`))
    );
  }

  getCollection(id: number): Observable<Collection> {
    return this.http.get<Collection>(`collection/${id}`).pipe(
      map(collection => ({ ...collection, parts: collection.parts.sort(this.sortByReleaseDate) }))
    );
  }

  getCurrentDiscoverCriteria(): SearchCriteria {
    return this._discoverCriteria.getValue();
  }

  getCurrentSearchCriteria(): SearchCriteria {
    return this._searchCriteria.getValue();
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<MovieResponse>(`movie/${id}?append_to_response=credits,external_ids,keywords,release_dates,similar,videos`).pipe(
      map(response => ({
        ...response,
        credits: {
          cast: response.credits.cast.map(person => ({...person, title: person.character })),
          crew: response.credits.crew.map(person => ({...person, title: person.job }))
        },
        keywords: response.keywords.keywords,
        rating: response.release_dates.results.find(result => result.iso_3166_1 === 'US')?.release_dates.find(release_date => release_date.certification)?.certification!, 
        similar: response.similar,
        youtubeTrailerId: response.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer')?.key!
      }))
    );
  }

  getMoviesByGenre(): Observable<MovieSearchResponse> {
    return this._genreCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`discover/movie?include_adult=false&page=${criteria.page}&region=US&with_genres=${criteria.id}`))
    );
  }

  getMoviesByKeyword(): Observable<MovieSearchResponse> {
    return this._keywordCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`discover/movie?include_adult=false&page=${criteria.page}&region=US&with_keywords=${criteria.id}`))
    );
  }

  getNowPlaying(): Observable<MovieSearchResponse> {
    return this._nowPlayingCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`movie/now_playing?page=${criteria.page}&region=US`))
    );
  }

  getPopular(): Observable<MovieSearchResponse> {
    return this._popularCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`movie/popular?page=${criteria.page}&region=US`))
    );
  }

  getTrending(): Observable<MovieSearchResponse> {
    return this._trendingCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`trending/movie/day?page=${criteria.page}`))
    );
  }

  getUpcoming(): Observable<MovieSearchResponse> {
    return this._upcomingCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`movie/upcoming?page=${criteria.page}&region=US`))
    );
  }

  search(): Observable<MovieSearchResponse> {
    return this._searchCriteria.asObservable().pipe(
      switchMap(criteria => this.http.get<MovieSearchResponse>(`search/movie?include_adult=false&page=${criteria.page}&query=${encodeURIComponent(criteria.query!)}&region=US`))
    );
  }
}
