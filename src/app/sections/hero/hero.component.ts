import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

}
