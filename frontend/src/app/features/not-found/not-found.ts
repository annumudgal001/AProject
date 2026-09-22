import { Component } from '@angular/core';
import { ClayButton } from '../../shared/ui/clay-button/clay-button';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ClayButton, ClayCard],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {}
