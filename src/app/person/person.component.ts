import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Person, PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  displayAllCast = false;
  displayAllCrew = false;
  limit = 6;
  person$: Observable<Person>;

  constructor(
    private peopleSvc: PeopleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.person$ = this.route.paramMap.pipe(
      switchMap(params => this.peopleSvc.getPerson(+params.get('id')!))
    );
  }

  viewAllCast(): void {
    this.displayAllCast = !this.displayAllCast;
  }

  viewAllCrew(): void {
    this.displayAllCrew = !this.displayAllCrew;
  }
}
