import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Character } from 'src/app/core/interfaces/character.interfaces';

@Component({
  selector: 'rickdex-card-character',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent {
  @Input({ required: true }) character!: Character;
}
