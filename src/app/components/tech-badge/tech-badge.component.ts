import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-tech-badge',
  templateUrl: './tech-badge.component.html',
  styleUrls: ['./tech-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadgeComponent {}
