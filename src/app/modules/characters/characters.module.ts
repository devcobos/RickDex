import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './components/list/list-characters.component';
import { CardCharacterComponent } from 'src/app/core/components/card-character/card-character.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ListCharactersComponent],
  imports: [CommonModule, CardCharacterComponent, CharactersRoutingModule, ScrollingModule],
})
export class CharactersModule {}
