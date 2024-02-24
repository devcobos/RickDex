import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { NoSelectDirective } from '../../directives/no-select.directive';
import { Router } from '@angular/router';
import { extracIdFromApiUrl } from '../../utils/url.utils';

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

  // Remove Outputs (ALWAYS ROUTE TO SAME PLACE)
  @Output('onClickTitle') clickedTitle = new EventEmitter<string>();
  @Output('onClickFirstSeen') clickedFirstSeen = new EventEmitter<string>();
  @Output('onClickLastKnownLocation') clickedLastKnownLocation = new EventEmitter<string>();

  // Change URL for ID
  protected onClickTitle(urlCharacter: string): void {
    this.clickedTitle.emit(urlCharacter);
  }

  protected onClickFirstSeen(urlEpisode: string): void {
    if (urlEpisode) {
      this._router.navigate(['/episode', extracIdFromApiUrl(urlEpisode)]);
    }
  }

  // Change URL for ID
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
