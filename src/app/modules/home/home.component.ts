import { Component, OnInit, inject } from '@angular/core';
import { Character, ListCharacterResponse } from 'src/app/core/interfaces/character.interfaces';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'rickdex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  _characterSevice: CharacterService = inject(CharacterService);
  characters!: Character[];

  ngOnInit(): void {
    this._characterSevice
      .listCharacters(1)
      .subscribe((data: ListCharacterResponse) => (this.characters = data.results));
  }
}
