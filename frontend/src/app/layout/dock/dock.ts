import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dock.html',
  styleUrl: './dock.css',
})
export class Dock {
  private readonly portfolio = inject(PortfolioService);
  readonly items = this.portfolio.navItems;
}