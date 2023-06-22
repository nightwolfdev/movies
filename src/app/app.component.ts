import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import { filter, tap } from 'rxjs/operators';

interface SearchForm {
  query?: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('contentArea') private contentArea: ElementRef;
  form: FormGroup<SearchForm>;

  constructor(private router: Router) {
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      this.router.navigate([route]);
    }
  }

  ngOnInit() {
    this.form = new FormGroup<SearchForm>({
      query: new FormControl()
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => this.contentArea.nativeElement.scrollTop = 0)
    ).subscribe();
  }

  onSubmit(): void {
    const query = this.form.get('query')?.value?.trim();

    if (query) {
      this.form.get('query')?.setValue('');
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
}
