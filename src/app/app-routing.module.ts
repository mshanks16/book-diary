import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksToReadComponent } from './books-to-read/books-to-read.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books-to-read', component: BooksToReadComponent },
  { path: 'completed-books', component: CompletedBooksComponent },
  { path: '**', redirectTo: '/home' }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
