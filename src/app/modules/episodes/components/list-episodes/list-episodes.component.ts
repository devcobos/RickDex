import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Episode } from 'src/app/core/interfaces/episode.interfaces';
import { EpisodeService } from 'src/app/core/services/episode.service';

@Component({
  selector: 'rickdex-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss'],
})
export class ListEpisodesComponent implements OnInit {
  private _episodeService: EpisodeService = inject(EpisodeService);
  _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  protected episodes!: Episode[];
  protected currentSeason: number = 1;

  ngOnInit(): void {
    this.loadEpisodes(this.currentSeason);
  }

  protected loadEpisodes(season: number): void {
    this._episodeService.listEpisodesBySeason(season).subscribe((response) => (this.episodes = response.results));

    this._ref.detectChanges();
  }
}
