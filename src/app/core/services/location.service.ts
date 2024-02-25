import { Injectable, inject } from '@angular/core';
import { LocationInterface } from '../interfaces/location.interfaces';
import { GET_LOCATION } from './graphql/location.queries';
import { Observable, map, take } from 'rxjs';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _apollo: Apollo = inject(Apollo);

  public getLocationById(idLocation: number | string): Observable<LocationInterface> {
    return this._apollo
      .watchQuery<any>({
        query: GET_LOCATION,
        variables: {
          idLocation: idLocation,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.location)
      );
  }
}
