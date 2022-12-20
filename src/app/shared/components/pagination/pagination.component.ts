import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [{ provide: Window, useValue: window }]
})
export class PaginationComponent {
  @Input() page: number;
  @Input() totalPages: number;
  @Output() nextPageEvent = new EventEmitter<number>();

  constructor(@Inject(Window) private window: Window) {}

  goToPage(page: number): void {
    this.window.document.getElementById('top')?.scrollIntoView();
    this.nextPageEvent.emit(page);
  }
}
