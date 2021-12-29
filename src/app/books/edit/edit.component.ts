import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/services/books.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-editing-books',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditBooksComponent implements OnInit {
  book: Book;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params["id"];
    
    this.booksService.getBookById(bookId)
      .subscribe(book => 
        this.book = book
      );
  }

  updateBook(){
    this.booksService.updateBook(this.book)
      .subscribe(result => console.log(result));
  }
}
