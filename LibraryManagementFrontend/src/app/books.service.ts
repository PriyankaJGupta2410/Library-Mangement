import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  private baseURl = 'http://localhost:9090/books'
 
  constructor(private http : HttpClient) { }

  getBooks(isbn : number) : Observable<any>{
    return this.http.get(`${this.baseURl}/${isbn}`);
  }

  createBooks(books : Object) : Observable<Object>{ 
    
    return this.http.post(`${this.baseURl}/addBook`, books);
  }

  updateBooks(isbn : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURl}/update/${isbn}`, value);
  }

  deleteBooks(isbn : number) : Observable<any>{
    return this.http.delete(`${this.baseURl}/delete/${isbn}`, { responseType : 'text'});
  }

  getBooksList() : Observable<any> {
    return this.http.get(`${this.baseURl}`);
  }
}
