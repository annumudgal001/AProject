import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [ClayCard, ClayBadge],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {
  private readonly portfolio = inject(PortfolioService);
  readonly journey = this.portfolio.journey;
}