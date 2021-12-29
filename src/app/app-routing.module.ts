import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedBooksComponent } from './books/completed/completed.component';
import { EditBooksComponent } from './books/edit/edit.component';
import { ToReadBooksComponent } from './books/to-read/to-read.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'book/to-read', component: ToReadBooksComponent },
  { path: 'book/completed', component: CompletedBooksComponent},
  { path: 'book/:id', component: EditBooksComponent},
  { path: '**', redirectTo: '/home' }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
