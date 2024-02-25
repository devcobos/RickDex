import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { Episode } from 'src/app/core/interfaces/episode.interfaces';
import { NoSelectDirective } from '../../directives/no-select.directive';
import { CardCharacterComponent } from '../card-character/card-character.component';

@Component({
  selector: 'rickdex-card-episode',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective, MatDividerModule, CardCharacterComponent],
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEpisodeComponent {
  @Input({ required: true }) episode!: Episode;
  @Input() loadCharacters: boolean = false;

  private _router: Router = inject(Router);

  protected trackByCharacter(index: number, character: Character): any {
    return character.id;
  }

  protected navigateToDetailEpisode(idEpisode: number): void {
    if (idEpisode) {
      this._router.navigate(['/episode', idEpisode]);
    }
  }
}
