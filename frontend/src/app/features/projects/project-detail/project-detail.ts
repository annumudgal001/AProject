import { Component, computed, inject, input } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { ClayButton } from '../../../shared/ui/clay-button/clay-button';
import { ClayBadge } from '../../../shared/ui/clay-badge/clay-badge';
import { ClayCard } from '../../../shared/ui/clay-card/clay-card';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ClayButton, ClayBadge, ClayCard],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private readonly portfolio = inject(PortfolioService);

  readonly id = input<string>('');

  readonly project = computed(() =>
    this.portfolio.getProjectById(this.id())
  );
}
