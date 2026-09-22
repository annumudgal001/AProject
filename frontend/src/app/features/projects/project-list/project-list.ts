import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { ClayCard } from '../../../shared/ui/clay-card/clay-card';
import { ClayBadge } from '../../../shared/ui/clay-badge/clay-badge';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink, ClayCard, ClayBadge],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  private readonly portfolio = inject(PortfolioService);

  readonly projects = this.portfolio.projects;
}