import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private endpointLocation: string = `${environment.baseUrlRickAndMortyApi}/${environment.locationUrlRickAndMortyApi}`;

  //   constructor(private http: HttpClient) {}

  //   public listCharacters(page: number): Observable<ListCharacterResponse> {
  //     const queryParams = new HttpParams().set('page', page.toString());

  //     return this.http.get<ListCharacterResponse>(this.endpointCharacter, { params: queryParams }).pipe(take(1));
  //   }
}
