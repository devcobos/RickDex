import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoSelectDirective } from '../../directives/no-select.directive';

@Component({
  selector: 'rickdex-card-location',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective],
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLocationComponent {}
