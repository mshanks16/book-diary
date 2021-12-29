import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/services/books.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './to-read.component.html',
  styleUrls: ['./to-read.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToReadBooksComponent implements OnInit {
  toReadBooks: Book[] = [];

  constructor(
    private booksService: BooksService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.booksService.getToRead()
      .subscribe(toReadBooks => 
        this.toReadBooks = toReadBooks
      );
  }

  selectBook(bookId: number) {
    this.router.navigate(['book', bookId]);
  }
  addNew() {
    this.router.navigate(['book', 'new']);
  }
}
