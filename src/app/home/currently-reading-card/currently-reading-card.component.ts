import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/services/books.interface';


@Component({
  selector: 'app-currently-reading-card',
  templateUrl: './currently-reading-card.component.html',
  styleUrls: ['./currently-reading-card.component.scss']
})
export class CurrentlyReadingCardComponent{
@Input() book: Book;

}
