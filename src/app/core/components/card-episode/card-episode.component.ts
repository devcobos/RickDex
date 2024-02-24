import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoSelectDirective } from '../../directives/no-select.directive';

@Component({
  selector: 'rickdex-card-episode',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective],
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEpisodeComponent {}
