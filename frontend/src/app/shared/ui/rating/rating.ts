import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  template: `
    <div class="rating" role="img" [attr.aria-label]="value() + ' out of 5 stars'">
      @for (star of stars; track $index) {
        <span [class.filled]="$index < value()">★</span>
      }
    </div>
  `,
  styles: [`
    .rating { display: inline-flex; gap: 0.15rem; color: var(--ink-muted); font-size: 1rem; }
    .filled { color: #e8b84a; }
  `],
})
export class Rating {
  readonly value = input(5);
  readonly stars = [1, 2, 3, 4, 5];
}