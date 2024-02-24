import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/core/interfaces/episode.interfaces';

@Component({
  selector: 'rickdex-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss'],
})
export class DetailEpisodeComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);

  episode!: Episode;

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ episode }) => {
      this.episode = episode;
    });
  }
}
