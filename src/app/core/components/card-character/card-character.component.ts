import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { NoSelectDirective } from '../../directives/no-select.directive';

@Component({
  selector: 'rickdex-card-character',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NoSelectDirective],
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCharacterComponent {
  @Input({ required: true }) character!: Character;

  protected click() {
    console.log('click');
  }

  protected getCharacterStatusStyle(status: string): any {
    switch (status) {
      case 'Dead':
        return { color: 'red' };
      case 'Alive':
        return { color: 'green' };
      case 'unknown':
      default:
        return { color: 'gray' };
    }
  }
}
