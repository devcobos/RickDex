import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
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

  private scrollSubscription!: Subscription;

  protected characters: Character[] = [];
  private currentPage = 1;

  ngOnInit(): void {
    this.loadCharacters();
    this.observingScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private observingScroll(): void {
    this.scrollSubscription = this._scrollDispatcher.scrolled().subscribe((scrollable: CdkScrollable | void) => {
      if (scrollable) {
        const element = scrollable.getElementRef().nativeElement;
        const viewportHeight = element.clientHeight;
        const scrollHeight = element.scrollHeight;
        const scrollPosition = element.scrollTop;

        const scrollPercentage = (scrollPosition / (scrollHeight - viewportHeight)) * 100;
        if (scrollPercentage > 20) {
          this.loadCharacters();
        }
      }
    });
  }

  private loadCharacters(): void {
    if (this.currentPage === 43 || this.isLoadingCharacters) {
      return;
    }

    this.isLoadingCharacters = true;
    this._characterService.listCharacters(this.currentPage).subscribe({
      next: (data: ListCharacterResponse) => {
        this.characters = [...this.characters, ...data.results];
        this.currentPage++;
        this.isLoadingCharacters = false;
      },
      error: () => {
        this.isLoadingCharacters = false;
      },
    });

    this._ref.detectChanges();
  }

  trackByCharacter(index: number, character: Character): any {
    return character.id;
  }
}
