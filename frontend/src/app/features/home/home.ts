import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayButton } from '../../shared/ui/clay-button/clay-button';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ClayButton, ClayCard, ClayBadge],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly portfolio = inject(PortfolioService);
  readonly profile = this.portfolio.profile;
  readonly featured = this.portfolio.featuredProjects;
  readonly philosophy = this.portfolio.philosophy;
}