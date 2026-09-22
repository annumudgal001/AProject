import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';
import { ClayButton } from '../../shared/ui/clay-button/clay-button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly portfolio = inject(PortfolioService);
  private readonly themeService = inject(ThemeService);

  readonly profile = this.portfolio.profile;
  readonly navItems = this.portfolio.navItems;
  readonly theme = this.themeService.theme;
  readonly mobileOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}