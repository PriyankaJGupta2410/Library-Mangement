import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books : Observable<Books[]>
  
  constructor(private router : Router,
    private booksService : BooksService) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData(){
    this.books = this.booksService.getBooksList();
  }

  deleteBooks(isbn : number){ 
    this.booksService.deleteBooks(isbn)
    .subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  booksDetails(isbn : number){
    this.router.navigate(['bookDetails', isbn])
  }

  updateBooks(isbn : number){
    this.router.navigate(['updateBooks', isbn])
  }

}
