import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Stat } from '../shared/services/books.interface';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  stats: Stat[]; 

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    
    forkJoin({
      totalPagesRead: this.bookService.getTotalPagesRead(),
      totalBooksRead: this.bookService.getTotalBooksRead(),
    })
  .subscribe(({ totalPagesRead, totalBooksRead }) => {
    this.stats = [
      { title: "Total Pages Read", icon: "auto_stories", subtitle: `${totalPagesRead} pages` },
      { title: "Total Books Read", icon: "import_contacts", subtitle: `${totalBooksRead} books` },
    ]
  })
    
  }

}
