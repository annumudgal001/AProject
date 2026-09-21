import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ProjectCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private portfolioService = inject(PortfolioService);

  portfolio = this.portfolioService.getPortfolio();

}