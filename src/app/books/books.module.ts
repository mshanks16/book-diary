import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../shared/services/books.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { EditBooksComponent } from './edit/edit.component';
import { CompletedBooksComponent } from './completed/completed.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ToReadBooksComponent } from './to-read/to-read.component';



@NgModule({
  declarations: [
    EditBooksComponent,
    CompletedBooksComponent,
    BooksListComponent,
    ToReadBooksComponent
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
export class BooksModule { }
