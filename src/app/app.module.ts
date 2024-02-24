import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ScrollingModule, MenuComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
