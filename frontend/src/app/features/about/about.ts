import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  private portfolioService = inject(PortfolioService);

  portfolio = this.portfolioService.getPortfolio();

}