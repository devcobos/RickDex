import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NoSelectDirective } from '../../directives/no-select.directive';
import { Character } from '../../interfaces/character.interfaces';
import { Episode } from '../../interfaces/episode.interfaces';
import { CharacterService } from '../../services/character.service';
import { CardCharacterComponent } from '../card-character/card-character.component';

@Component({
  selector: 'rickdex-card-episode',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective, MatDividerModule, CardCharacterComponent],
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEpisodeComponent implements OnInit {
  @Input({ required: true }) episode!: Episode;
  @Input() loadCharacters!: boolean;

  private _ref: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _characterService: CharacterService = inject(CharacterService);

  characters: Character[] = [];

  ngOnInit(): void {
    if (this.loadCharacters) {
      let delay = 0; // Retraso inicial en milisegundos
      const delayIncrement = 250; // Incremento del retraso para cada llamada

      for (const url of this.episode.characters) {
        setTimeout(() => {
          this._characterService.getCharacterByUrl(url).subscribe((character) => {
            this.characters.push(character);
            this._ref.detectChanges();
          });
        }, delay);

        delay += delayIncrement; // Incrementa el retraso para la próxima iteración
      }
    }
  }

  protected trackByCharacter(index: number, character: Character): any {
    return character.id;
  }
}
