import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private endpointCharacter: string = `${environment.baseUrlRickAndMortyApi}/${environment.characterUrlRickAndMortyApi}`;

  constructor(private http: HttpClient) {}

  public listCharacters(page: number): Observable<Character[]> {
    const queryParams = new HttpParams().set('page', page.toString());

    return this.http.get<Character[]>(this.endpointCharacter, { params: queryParams }).pipe(take(1));
  }
}
