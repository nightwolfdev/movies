import { Component, Input } from '@angular/core';

import { Movie } from '../../services/movies.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  @Input() externalIds: Movie['external_ids'];
  @Input() homepage: string;
}
