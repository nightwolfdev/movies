import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  genres: Genre[];
}

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private _genres = new BehaviorSubject<Genre[]>([]);
  
  genres$ = this._genres.asObservable();

  constructor(private http: HttpClient) {
    this.getGenres().subscribe();
  }

  private getGenres(): Observable<Genre[]> {
    return this.http.get<GenreResponse>('genre/movie/list').pipe(
      map(response => response.genres),
      tap(genres => this._genres.next(genres))
    );
  }

  getGenreName(id: number): Observable<string> {
    return this.genres$.pipe(map(genres => genres.find(genre => genre.id === id)?.name!));
  }
}
