import { Component, input } from '@angular/core';

@Component({
  selector: 'app-clay-badge',
  standalone: true,
  template: `<span class="badge" [class]="variant()"><ng-content /></span>`,
  styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.7rem;
      border-radius: var(--radius-pill);
      font-size: 0.78rem;
      font-weight: 550;
      background: var(--accent-soft);
      color: var(--accent);
    }
    .badge.success { background: rgba(122, 158, 138, 0.2); color: var(--success); }
    .badge.muted { background: var(--surface-raised); color: var(--ink-soft); }
  `],
})
export class ClayBadge {
  readonly variant = input<'default' | 'success' | 'muted'>('default');
}