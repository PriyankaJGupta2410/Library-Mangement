import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';



@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  books : Books =  new Books();
  submitted = false
  
  constructor(private booksService : BooksService,
    private router : Router) { }

  ngOnInit(){
  }

  newBooks() : void {
    this.submitted = false;
    this.books = new Books();
  }

  save(){
    this.booksService
    .createBooks(this.books)
    .subscribe(data => {
      console.log(data),
      this.books = new Books();
    },
    error => console.log(error));
  }
    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList(){
      this.router.navigate(['/books']);
    }
}
