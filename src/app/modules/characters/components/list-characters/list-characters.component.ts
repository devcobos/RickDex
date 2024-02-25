import { ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Character, ListCharacterResponse } from 'src/app/core/interfaces/character.interfaces';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'rickdex-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent implements OnInit, OnDestroy {
  _characterService: CharacterService = inject(CharacterService);
  _scrollDispatcher: ScrollDispatcher = inject(ScrollDispatcher);
  _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  private isLoadingCharacters = false;
  private intervalId: any;
  protected characters: Character[] = [];
  private currentPage = 1;
  private loadMorePages = true;

  ngOnInit(): void {
    this.loadCharacters(); // Carga inicial sin retraso
    this.intervalId = window.setInterval(() => {
      this.loadCharacters();
    }, 350);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruya
    }
  }

  private loadCharacters(): void {
    if (!this.loadMorePages || this.isLoadingCharacters) {
      return;
    }

    this.isLoadingCharacters = true;
    this._characterService.listCharacters(this.currentPage).subscribe({
      next: (data: ListCharacterResponse) => {
        this.characters = [...this.characters, ...data.results];
        this.currentPage++;
        this.isLoadingCharacters = false;
        if (!data.info.next) this.loadMorePages = false;
      },
      error: () => {
        this.isLoadingCharacters = false;
      },
    });

    this._ref.detectChanges();
  }

  protected onClickTitle(urlCharacter: string) {
    console.log(urlCharacter);
  }

  protected onClickLastKnownLocation(urlLocation: string) {
    console.log(urlLocation);
  }

  protected onClickFirstSeen(urlEpisode: string) {
    console.log(urlEpisode);
  }

  protected trackByCharacter(index: number, character: Character): any {
    return character.id;
  }
}
