import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedBooksComponent } from './completed-books.component';
import { BooksService } from '../shared/services/books.service';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CompletedBooksComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    BooksService
  ]
})
export class CompletedBooksModule { }
