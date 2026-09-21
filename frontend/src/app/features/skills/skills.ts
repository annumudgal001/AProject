import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  private portfolioService = inject(PortfolioService);

  skills = this.portfolioService.getPortfolio().skills;

}