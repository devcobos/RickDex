import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CardEpisodeComponent } from 'src/app/shared/components/card-episode/card-episode.component';
import { DetailEpisodeComponent } from './components/detail-episode/detail-episode.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { EpisodesModuleRoutingModule } from './episodes-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailEpisodeComponent, ListEpisodesComponent],
  imports: [CommonModule, EpisodesModuleRoutingModule, MatButtonModule, CardEpisodeComponent, MatDividerModule, MatIconModule],
})
export class EpisodesModule {}
