import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-dynamic-island',
  standalone: true,
  templateUrl: './dynamic-island.html',
  styleUrl: './dynamic-island.css',
})
export class DynamicIsland {
  private readonly portfolio = inject(PortfolioService);
  readonly profile = this.portfolio.profile;
  readonly expanded = signal(false);

  toggle(): void {
    this.expanded.update((v) => !v);
  }
}