import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';
import { ClayButton } from '../../shared/ui/clay-button/clay-button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ClayCard, ClayButton],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private readonly portfolio = inject(PortfolioService);
  readonly services = this.portfolio.services;
}
