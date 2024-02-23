import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, switchMap, take } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { ListCharacterResponse } from '../interfaces/character.interfaces';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _http: HttpClient = inject(HttpClient);
  private _episodeService: EpisodeService = inject(EpisodeService);

  private endpointCharacter: string = `${environment.baseUrlRickAndMortyApi}/${environment.characterUrlRickAndMortyApi}`;

  public listCharacters(page: number): Observable<ListCharacterResponse> {
    const queryParams = new HttpParams().set('page', page.toString());

    return this._http.get<ListCharacterResponse>(this.endpointCharacter, { params: queryParams }).pipe(
      take(1),
      switchMap((response) => {
        const firstEpisodeObservables = response.results.map((character) =>
          this._episodeService.getEpisodeByEndpoint(character.episode[0]).pipe(
            map((firstEpisode) => {
              return { ...character, firstEpisode: firstEpisode };
            })
          )
        );

        return forkJoin(firstEpisodeObservables).pipe(
          map((enrichedCharacters) => {
            return {
              ...response,
              results: enrichedCharacters,
            };
          })
        );
      })
    );
  }
}
