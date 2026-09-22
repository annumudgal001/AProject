import { Component, input } from '@angular/core';

@Component({
  selector: 'app-clay-card',
  standalone: true,
  templateUrl: './clay-card.html',
  styleUrl: './clay-card.css',
})
export class ClayCard {
  readonly elevated = input(true);
  readonly padding = input<'sm' | 'md' | 'lg'>('md');
  readonly interactive = input(false);
}