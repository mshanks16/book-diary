import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/services/books.interface';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './completed-books.component.html',
  styleUrls: ['./completed-books.component.scss']
})
export class CompletedBooksComponent implements OnInit {
  completedBooks: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getCompleted()
      .subscribe(completedBooks => 
        this.completedBooks = completedBooks
      );
  }

}
