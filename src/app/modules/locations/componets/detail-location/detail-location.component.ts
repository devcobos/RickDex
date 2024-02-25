import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationInterface } from 'src/app/core/interfaces/location.interfaces';

@Component({
  selector: 'rickdex-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
})
export class DetailLocationComponent {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  location!: LocationInterface;

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ location }) => {
      this.location = location;
    });
    this._ref.detectChanges();
  }
}
