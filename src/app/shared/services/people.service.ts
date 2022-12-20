import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MovieSearchResult } from './movies.service';

export interface Person {
  biography: string;
  birthday: string;
  credits: {
    cast: MovieSearchResult[];
    crew: MovieSearchResult[];
  }
  deathday: string;
  external_ids: {
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
  };
  homepage: string;
  id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`person/${id}?append_to_response=credits,external_ids`);
  }
}
