import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';
import { formatToSeason } from '../../shared/utils/episode.utils';
import { Episode, ListEpisodeResponse } from '../interfaces/episode.interfaces';
import { GET_EPISODE, LIST_EPISODES } from './graphql/episode.queries';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private _apollo: Apollo = inject(Apollo);

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
    return this._apollo
      .watchQuery<any>({
        query: LIST_EPISODES,
        variables: {
          season: formatToSeason(season),
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.episodes)
      );
  }
}
