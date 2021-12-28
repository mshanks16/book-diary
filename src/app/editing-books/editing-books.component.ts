import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/services/books.interface';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-editing-books',
  templateUrl: './editing-books.component.html',
  styleUrls: ['./editing-books.component.scss']
})
export class EditingBooksComponent implements OnInit {
  book: any;

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

  selectBook(bookId: number) {
    this.router.navigate(['book', bookId]);
  }

  updateBook(){
    this.booksService.updateBook(this.book)
      .subscribe(result => console.log(result));
  }

}
