import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/services/books.interface';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './completed-books.component.html',
  styleUrls: ['./completed-books.component.scss']
})
export class CompletedBooksComponent implements OnInit {
  completedBooks: Book[] = [];

  constructor(
    private booksService: BooksService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.booksService.getCompleted()
      .subscribe(completedBooks => 
        this.completedBooks = completedBooks
      );
  }

  selectBook(bookId: number) {
    this.router.navigate(['book', bookId]);
  }

}
