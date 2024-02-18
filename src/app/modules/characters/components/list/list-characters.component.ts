import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Character, ListCharacterResponse } from 'src/app/core/interfaces/character.interfaces';
import { CharacterService } from 'src/app/core/services/character.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rickdex-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent implements OnInit, OnDestroy {
  _characterSevice: CharacterService = inject(CharacterService);
  _scrollDispatcher: ScrollDispatcher = inject(ScrollDispatcher);
  _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  private scrollSubscription!: Subscription;

  characters: Character[] = [];
  private currentPage = 1;

  ngOnInit(): void {
    this.loadInitialCharacters();
    this.scrollSubscription = this._scrollDispatcher.scrolled().subscribe((scrollable: void | CdkScrollable) => {
      console.log('Evento de desplazamiento disparado', scrollable);
      if (scrollable) {
        const viewport = scrollable.measureScrollOffset('bottom');
        if (viewport < 600) {
          this.loadMoreCharacters();
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private loadInitialCharacters(): void {
    this._characterSevice
      .listCharacters(1)
      .subscribe((data: ListCharacterResponse) => (this.characters = data.results));
  }

  private loadMoreCharacters(): void {
    if (this.currentPage === 42) return;

    this.currentPage++;

    this._characterSevice
      .listCharacters(this.currentPage)
      .subscribe((data: ListCharacterResponse) => this.characters.push(...data.results));

    this._ref.detectChanges();
  }
}
