import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/services/books.interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() books: Book[];
  @Output() select = new EventEmitter();
}
