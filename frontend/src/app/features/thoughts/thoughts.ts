import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [ClayCard, ClayBadge],
  templateUrl: './thoughts.html',
  styleUrl: './thoughts.css',
})
export class Thoughts {
  private readonly portfolio = inject(PortfolioService);

  readonly thoughts = this.portfolio.thoughts;
}