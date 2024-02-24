import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { Episode } from 'src/app/core/interfaces/episode.interfaces';
import { CharacterService } from 'src/app/core/services/character.service';
import { NoSelectDirective } from '../../directives/no-select.directive';
import { extracIdFromApiUrl } from '../../utils/url.utils';
import { CardCharacterComponent } from '../card-character/card-character.component';

@Component({
  selector: 'rickdex-card-episode',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective, MatDividerModule, CardCharacterComponent],
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEpisodeComponent implements OnChanges {
  @Input({ required: true }) episode!: Episode;
  @Input() loadCharacters: boolean = false;

  private _router: Router = inject(Router);
  private _ref: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _characterService: CharacterService = inject(CharacterService);

  characters: Character[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['episode']) {
      this.loadCharactersFromEpisode();
    }
  }

  public loadCharactersFromEpisode() {
    if (this.loadCharacters) {
      let characters: Character[] = [];
      let delay = 0; // Retraso inicial en milisegundos
      const delayIncrement = 250; // Incremento del retraso para cada llamada

      for (const url of this.episode.characters) {
        setTimeout(() => {
          this._characterService.getCharacterByUrl(url).subscribe((character) => {
            characters.push(character);
            this._ref.markForCheck();
          });
        }, delay);

        delay += delayIncrement; // Incrementa el retraso para la próxima iteración
      }

      this.characters = characters;
    }
  }

  protected trackByCharacter(index: number, character: Character): any {
    return character.id;
  }

  protected navigateToDetailEpisode(urlEpisode: string): void {
    if (urlEpisode) {
      this._router.navigate(['/episode', extracIdFromApiUrl(urlEpisode)]);
    }
  }
}
