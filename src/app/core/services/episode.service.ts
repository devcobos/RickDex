import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { formatToSeason } from '../../shared/utils/episode.utils';
import { Episode, ListEpisodeResponse } from '../interfaces/episode.interfaces';
import { GET_EPISODE } from './graphql/episode.queries';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private _http: HttpClient = inject(HttpClient);
  private _apollo: Apollo = inject(Apollo);

  private endpointEpisode: string = `${environment.baseUrlRickAndMortyApi}/${environment.episodeUrlRickAndMortyApi}`;

  public getEpisodeById(idEpisode: number | string): Observable<Episode> {
    return this._apollo
      .watchQuery<any>({
        query: GET_EPISODE,
        variables: {
          idEpisode: idEpisode,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.episode)
      );
  }

  public listEpisodesBySeason(season: string | number): Observable<ListEpisodeResponse> {
    const queryParams = new HttpParams().set('episode', formatToSeason(season));

    return this._http.get<ListEpisodeResponse>(this.endpointEpisode, { params: queryParams }).pipe(take(1));
  }
}
