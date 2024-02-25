import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { locationResolver } from 'src/app/core/resolvers/location.resolvers';
import { DetailLocationComponent } from './componets/detail-location/detail-location.component';

const LOCATIONS_ROUTES: Routes = [
  //   { path: '', component: ListEpisodesComponent },
  {
    path: ':idLocation',
    component: DetailLocationComponent,
    resolve: { location: locationResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(LOCATIONS_ROUTES)],
  exports: [RouterModule],
})
export class LocationsModuleRoutingModule {}
