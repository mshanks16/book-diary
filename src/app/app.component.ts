import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Diary';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/book/to-read', icon: 'import_contacts', title: 'Books to Read' },
    { path: '/book/completed', icon: 'done', title: 'Completed Books' },
  ];

  constructor(private router: Router) {}

}
