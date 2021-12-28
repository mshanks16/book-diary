import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksToReadComponent } from './books-to-read/books-to-read.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { EditingBooksComponent } from './editing-books/editing-books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'book/to-read', component: BooksToReadComponent },
  { path: 'book/completed', component: CompletedBooksComponent },
  { path: 'book/:id', component: EditingBooksComponent },
  { path: '**', redirectTo: '/home' }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
