import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailEpisodeComponent } from './components/detail-episode/detail-episode.component';
import { EpisodesModuleRoutingModule } from './episodes-routing.module';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { CardEpisodeComponent } from 'src/app/shared/components/card-episode/card-episode.component';

@NgModule({
  declarations: [DetailEpisodeComponent, ListEpisodesComponent],
  imports: [CommonModule, EpisodesModuleRoutingModule, CardEpisodeComponent],
})
export class EpisodesModule {}
