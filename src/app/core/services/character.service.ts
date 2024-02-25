import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';
import { ListCharacterResponse } from '../interfaces/character.interfaces';
import { LIST_CHARACTERS } from './graphql/character.queries';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _apollo: Apollo = inject(Apollo);

  public listCharacters(page: number): Observable<ListCharacterResponse> {
    return this._apollo
      .watchQuery<any>({
        query: LIST_CHARACTERS,
        variables: {
          page: page,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.characters)
      );
  }
}
