import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LocationInterface } from '../interfaces/location.interfaces';
import { LocationService } from '../services/location.service';

export const locationResolver: ResolveFn<LocationInterface> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(LocationService).getLocationById(route.paramMap.get('idLocation')!);
};
