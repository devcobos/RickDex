import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output('onClickTitle') clickedTitle = new EventEmitter<string>();
  @Output('onClickFirstSeen') clickedFirstSeen = new EventEmitter<string>();
  @Output('onClickLastKnownLocation') clickedLastKnownLocation = new EventEmitter<string>();

  protected onClickTitle(urlCharacter: string): void {
    this.clickedTitle.emit(urlCharacter);
  }

  protected onClickFirstSeen(urlEpisode: string): void {
    this.clickedFirstSeen.emit(urlEpisode);
  }
  protected onClickLastKnownLocation(urlLocation: string): void {
    this.clickedLastKnownLocation.emit(urlLocation);
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
