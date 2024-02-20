import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
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
    this.scrollSubscription = this._scrollDispatcher.scrolled().subscribe((scrollable: void | CdkScrollable) => {
      if (scrollable) {
        const viewport = scrollable.measureScrollOffset('bottom');
        if (viewport < 600) {
          this.loadCharacters();
        }
      }
    });
  }

  private loadCharacters(): void {
    // TODO Esto es una chapuza. !No se muestran los ultimos personajes
    if (this.currentPage === 43) {
      return;
    }

    this._characterSevice.listCharacters(this.currentPage).subscribe((data: ListCharacterResponse) => {
      this.characters = [...this.characters, ...data.results];
      this.currentPage++;
    });

    this._ref.detectChanges();
  }
}
