import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardCharacterComponent } from 'src/app/shared/components/card-character/card-character.component';

@NgModule({
  declarations: [ListCharactersComponent],
  imports: [CommonModule, CardCharacterComponent, CharactersRoutingModule, ScrollingModule, MatGridListModule],
})
export class CharactersModule {}
