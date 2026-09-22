import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { Rating } from '../../shared/ui/rating/rating';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ClayCard, Rating],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  private readonly portfolio = inject(PortfolioService);
  readonly reviews = this.portfolio.reviews;
}