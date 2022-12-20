import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Rating {
  certification: string;
  meaning: string;
  order: number;
}

interface RatingResponse {
  certifications: {
    [region: string]: Rating[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  private _ratings = new BehaviorSubject<Rating[]>([]);
  
  ratings$ = this._ratings.asObservable();

  constructor(private http: HttpClient) {
    this.getRatings().subscribe();
  }

  private getRatings(): Observable<Rating[]> {
    return this.http.get<RatingResponse>('certification/movie/list').pipe(
      map(response => response.certifications['US'].sort((a: Rating, b: Rating) => a.order - b.order)),
      tap(ratings => this._ratings.next(ratings))
    );
  }

  getRating(certification: string): Observable<Rating> {
    return this.ratings$.pipe(
      map(ratings => ratings.find(rating => rating.certification === certification)!)
    );
  }
}
