import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardCharacterComponent } from 'src/app/shared/components/card-character/card-character.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardCharacterComponent, HomeRoutingModule],
})
export class HomeModule {}
