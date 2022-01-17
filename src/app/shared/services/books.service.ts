import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookStatus } from './books.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private model = 'books';
  
  constructor(private http: HttpClient) { }

  getCompleted(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getUrl() + "?status=Completed");
  }

  getToRead(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getUrl() + "?status=Not Started&status=Currently Reading");
  }

  getTotalPagesRead(): Observable<number> {
    return this.http.get<Book[]>(this.getUrl() + "?status=Completed&status=Currently Reading")
    .pipe(map(books => { 
     let total = 0
       for (let i = 0; i < books.length; i++) {
         if(books[i].currentPage) {
          total += books[i].currentPage
         }
       }
     return total
    }));
  }

  getTotalBooksRead(): Observable<number> {
    return this.http.get<Book[]>(this.getUrl() + "?status=Completed")
    .pipe(map(books => books.length));
  }

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(this.getUrl() + `/${bookId}`);
  }

  updateBook(book: Book): Observable<Book> {
    if (book.status === BookStatus.Completed) {
      book.currentPage = book.pages;
      if (!book.dateCompleted) {
        book.dateCompleted = new Date();
      } 
    }
    return this.http.put<Book>(this.getUrl() + `/${book.id}`, book)
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.getUrl(), book)
  }

  getNewBook(): Book {
    return {
      title: "",
      description: "",
      author: "",
      notes: "",
      status: BookStatus.NotStarted,
      pages: 0,
      currentPage: 0,
    };
  }

  private getUrl() {
    return `${environment.baseUrl}${this.model}`;
  }

}
