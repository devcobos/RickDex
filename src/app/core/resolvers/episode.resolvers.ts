import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Episode } from '../interfaces/episode.interfaces';
import { inject } from '@angular/core';
import { EpisodeService } from '../services/episode.service';

export const episodeResolver: ResolveFn<Episode> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(EpisodeService).getEpisodeById(route.paramMap.get('idEpisode')!);
};
