import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  {
    path: 'character',
    loadChildren: () => import('./modules/characters/characters.module').then((m) => m.CharactersModule),
  },
  {
    path: 'episode',
    loadChildren: () => import('./modules/episodes/episodes.module').then((m) => m.EpisodesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
