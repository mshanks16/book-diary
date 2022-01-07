import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookStatus } from 'src/app/shared/services/books.interface';
import { BooksService } from 'src/app/shared/services/books.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-editing-books',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditBooksComponent implements OnInit {
  book: Book;
  isNew = false;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params["id"];
    
    if (bookId === "new") {
      this.isNew = true;
      this.book = this.booksService.getNewBook();
      return;
    }

    this.booksService.getBookById(bookId)
      .subscribe(book => 
        this.book = book
      );
  }

  saveBook() {
    if ( this.isNew) {
      this.booksService.createBook(this.book)
        .subscribe(book => this.book = book);
    } else {
    this.booksService.updateBook(this.book)
      .subscribe(result => console.log(result));
    }
    if (this.book.status === BookStatus.Completed && !this.book.rating) {
      this.openDialog();
    }
  }

  openDialog(): void {
    console.log('here')
    const dialogRef = this.dialog.open(RatingDialog, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(rating => {
      if (rating) {
        this.book.rating = rating;
        this.booksService.updateBook(this.book)
        .subscribe(book => console.log(book));
      }
      });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './rating-dialog.html',
})
export class RatingDialog {
  constructor(
    public dialogRef: MatDialogRef<RatingDialog>,
  ) { }

  rating = 5;

  onClickNo(): void {
    this.dialogRef.close();
  }

  getIcon(star: number) {
    return this.rating >= star ? 'star' : 'star_border';
  }

  onClickStar(rating: number) {
    this.rating = rating
  }

}