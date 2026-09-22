import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ClayCard, ClayBadge],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  private readonly portfolioService = inject(PortfolioService);

  readonly skills = this.portfolioService.skills;
}