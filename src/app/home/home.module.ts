import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { StatCardComponent } from './stat-card/stat-card.component';
import { CurrentlyReadingCardComponent } from './currently-reading-card/currently-reading-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    StatCardComponent,
    CurrentlyReadingCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
