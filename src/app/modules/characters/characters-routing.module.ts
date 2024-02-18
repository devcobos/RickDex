import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './components/list/list-characters.component';

const CHARACTERS_ROUTES: Routes = [
  { path: '', component: ListCharactersComponent },
  // {
  //   path: '{id}',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(CHARACTERS_ROUTES)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
