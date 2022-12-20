import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Keyword {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor(private http: HttpClient) { }

  getKeywordName(id: number): Observable<string> {
    return this.http.get<Keyword>(`keyword/${id}`).pipe(
      map(keyword => keyword.name)
    );
  }
}