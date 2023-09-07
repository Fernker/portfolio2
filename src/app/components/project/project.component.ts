import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {}

@Directive({
  selector: 'portfolio-project-title',
})
export class ProjectTitleDirective {}
