import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly portfolio = inject(PortfolioService);
  readonly profile = this.portfolio.profile;
  readonly meta = this.portfolio.meta;
  readonly social = this.portfolio.profile().social;
}