import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { StatCardComponent } from './stat-card/stat-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    StatCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
