import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditingBooksComponent } from './editing-books.component';
import { BooksService } from '../shared/services/books.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditingBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    BooksService
  ]
})
export class EditingBooksModule { }
