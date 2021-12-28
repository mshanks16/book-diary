import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private model = 'books';
  
  constructor(private http: HttpClient) { }

  getCompleted(){
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    return `${environment.baseUrl}${this.model}`;
  }

}
