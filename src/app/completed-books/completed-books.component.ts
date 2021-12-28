import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './completed-books.component.html',
  styleUrls: ['./completed-books.component.scss']
})
export class CompletedBooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getCompleted()
      .subscribe((result) => {
        console.log(result)
      });
  }

}
