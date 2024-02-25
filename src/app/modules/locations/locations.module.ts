import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CardLocationComponent } from 'src/app/shared/components/card-location/card-location.component';
import { DetailLocationComponent } from './componets/detail-location/detail-location.component';
import { LocationsModuleRoutingModule } from './locations-routing.module';

@NgModule({
  declarations: [DetailLocationComponent],
  imports: [CommonModule, LocationsModuleRoutingModule, MatButtonModule, CardLocationComponent, MatDividerModule, MatIconModule],
})
export class LocationsModule {}
