import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedBooksComponent } from './completed-books.component';
import { BooksService } from '../shared/services/books.service';



@NgModule({
  declarations: [
    CompletedBooksComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BooksService
  ]
})
export class CompletedBooksModule { }
