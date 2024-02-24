import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEpisodeComponent } from './components/detail-episode/detail-episode.component';
import { episodeResolver } from 'src/app/core/resolvers/episode.resolvers';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';

const EPISODES_ROUTES: Routes = [
  { path: '', component: ListEpisodesComponent },
  {
    path: ':idEpisode',
    component: DetailEpisodeComponent,
    resolve: { episode: episodeResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(EPISODES_ROUTES)],
  exports: [RouterModule],
})
export class EpisodesModuleRoutingModule {}
