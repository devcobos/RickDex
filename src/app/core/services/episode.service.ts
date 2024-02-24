import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Episode } from '../interfaces/episode.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private _http: HttpClient = inject(HttpClient);

  private endpointCharacter: string = `${environment.baseUrlRickAndMortyApi}/${environment.episodeUrlRickAndMortyApi}`;

  public getEpisodeById(idEpisode: number | string): Observable<Episode> {
    const endpoint = `${this.endpointCharacter}/${idEpisode}`;

    return this._http.get<Episode>(endpoint).pipe(take(1));
  }

  public getEpisodeByEndpoint(endpoint: string): Observable<Episode> {
    return this._http.get<Episode>(endpoint).pipe(take(1));
  }
}
