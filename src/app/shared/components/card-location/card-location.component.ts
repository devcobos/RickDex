import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interfaces';
import { LocationInterface } from 'src/app/core/interfaces/location.interfaces';
import { NoSelectDirective } from '../../directives/no-select.directive';
import { CardCharacterComponent } from '../card-character/card-character.component';

@Component({
  selector: 'rickdex-card-location',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NoSelectDirective, MatDividerModule, CardCharacterComponent],
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLocationComponent {
  @Input({ required: true }) location!: LocationInterface;
  @Input() loadCharacters: boolean = false;

  private _router: Router = inject(Router);

  protected trackByCharacter(index: number, character: Character): any {
    return character.id;
  }

  protected navigateToDetailLocation(idLocation: number): void {
    if (idLocation) {
      this._router.navigate(['/episode', idLocation]);
    }
  }
}
