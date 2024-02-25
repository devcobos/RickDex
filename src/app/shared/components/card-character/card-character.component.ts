import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { NoSelectDirective } from '../../directives/no-select.directive';

@Component({
  selector: 'rickdex-card-character',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective],
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCharacterComponent {
  @Input({ required: true }) character!: Character;

  private _router: Router = inject(Router);

  protected onClickTitle(idCharacter: number): void {
    if (idCharacter) {
      this._router.navigate(['/character', idCharacter]);
    }
  }

  protected onClickFirstSeen(idEpisode: number): void {
    if (idEpisode) {
      this._router.navigate(['/episode', idEpisode]);
    }
  }

  protected onClickLastKnownLocation(idLocation: number): void {
    if (idLocation) {
      this._router.navigate(['/location', idLocation]);
    }
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
