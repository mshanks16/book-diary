import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Book, Stat } from '../shared/services/books.interface';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  stats: Stat[]; 
  books: Book[];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    
    forkJoin({
      totalPagesRead: this.bookService.getTotalPagesRead(),
      totalBooksRead: this.bookService.getTotalBooksRead(),
      currentlyReading: this.bookService.getCurrentlyReading()
    })
  .subscribe(({ totalPagesRead, totalBooksRead, currentlyReading }) => {
    this.stats = [
      { title: "Total Pages Read", icon: "auto_stories", subtitle: `${totalPagesRead} pages` },
      { title: "Total Books Read", icon: "import_contacts", subtitle: `${totalBooksRead} books` },
    ]
    this.books = currentlyReading;
  })
    
  }

}
