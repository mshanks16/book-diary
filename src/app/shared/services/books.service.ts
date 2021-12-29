import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(this.getUrl() + `/${bookId}`);
  }

  updateBook(book: Book) {
    return this.http.put(this.getUrl() + `/${book.id}`, book)
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.getUrl(), book)
  }

  getNewBook(): Book {
    return {
      title: "",
      description: "",
      notes: "",
      status: BookStatus.NotStarted
    };
  }

  private getUrl() {
    return `${environment.baseUrl}${this.model}`;
  }

}
