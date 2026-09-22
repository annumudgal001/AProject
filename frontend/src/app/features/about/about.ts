import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ClayCard, ClayBadge],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly portfolio = inject(PortfolioService);
  readonly profile = this.portfolio.profile;
  readonly experience = this.portfolio.experience;
  readonly education = this.portfolio.education;
  readonly philosophy = this.portfolio.philosophy;
}