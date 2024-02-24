import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Episode, ListEpisodeResponse } from '../interfaces/episode.interfaces';
import { formatToSeason } from '../utils/episode.utils';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private _http: HttpClient = inject(HttpClient);

  private endpointEpisode: string = `${environment.baseUrlRickAndMortyApi}/${environment.episodeUrlRickAndMortyApi}`;

  public getEpisodeById(idEpisode: number | string): Observable<Episode> {
    const endpoint = `${this.endpointEpisode}/${idEpisode}`;

    return this._http.get<Episode>(endpoint).pipe(take(1));
  }

  public getEpisodeByEndpoint(endpoint: string): Observable<Episode> {
    return this._http.get<Episode>(endpoint).pipe(take(1));
  }

  public listEpisodesBySeason(season: string | number): Observable<ListEpisodeResponse> {
    const queryParams = new HttpParams().set('episode', formatToSeason(season));

    return this._http.get<ListEpisodeResponse>(this.endpointEpisode, { params: queryParams }).pipe(take(1));
  }
}
