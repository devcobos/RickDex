import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEpisodeComponent } from './components/detail-episode/detail-episode.component';
import { episodeResolver } from 'src/app/core/resolvers/episode.resolvers';

const EPISODES_ROUTES: Routes = [
  // { path: '', component: ListCharactersComponent },
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
