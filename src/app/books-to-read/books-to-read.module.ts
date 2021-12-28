import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksToReadComponent } from './books-to-read.component';
import { BooksService } from '../shared/services/books.service';



@NgModule({
  declarations: [
    BooksToReadComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BooksService
  ]
})
export class BooksToReadModule { }
