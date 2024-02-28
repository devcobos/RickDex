import { Component, OnInit, inject } from '@angular/core';
import { LocationInterface } from 'src/app/core/interfaces/location.interfaces';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'rickdex-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss'],
})
export class ListLocationsComponent implements OnInit {
  _locationService: LocationService = inject(LocationService);

  locations: LocationInterface[] = [];

  nextPage?: number;
  previousPage?: number;

  ngOnInit(): void {
    this.loadLocations(1);
  }

  protected loadLocations(page: number): void {
    this._locationService.listLocations(page).subscribe((response) => {
      this.locations = response.results;
      this.nextPage = response.info.next;
      this.previousPage = response.info.prev;
    });
  }
}
