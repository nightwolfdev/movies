import { Component, Input } from '@angular/core';

import { MoviePerson } from '../../services/movies.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  @Input() displayAll = false;
  @Input() limit = 6;
  @Input() people: MoviePerson[];

  trackById(index: number, person: MoviePerson): number {
    return person.id;
  }
}
