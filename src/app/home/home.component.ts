import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    this.stats = this.bookService.getStats();
  }

}
