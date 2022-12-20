import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface WatchProvider {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface WatchProviderResponse {
  results: WatchProvider[];
}

@Injectable({
  providedIn: 'root'
})
export class WatchProviderService {
  private _watchProviders = new BehaviorSubject<WatchProvider[]>([]);
  
  watchProviders$ = this._watchProviders.asObservable();

  constructor(private http: HttpClient) {
    this.getWatchProviders().subscribe();
  }

  private sortByProviderName(a: WatchProvider, b: WatchProvider): number {
    return a.provider_name > b.provider_name ? 1 : ((b.provider_name > a.provider_name) ? -1 : 0);
  }

  private getWatchProviders(): Observable<WatchProvider[]> {
    return this.http.get<WatchProviderResponse>('watch/providers/movie?watch_region=US').pipe(
      map(response => response.results.sort(this.sortByProviderName)),
      tap(watchProviders => this._watchProviders.next(watchProviders))
    );
  }
}
