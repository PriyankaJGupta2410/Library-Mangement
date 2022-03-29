import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  isbn : number;
  books : Books;

  constructor(private route : ActivatedRoute,
    private router : Router,
    private booksService : BooksService) { }

  ngOnInit(){
    this.books = new Books();
    
    this.isbn = this.route.snapshot.params['isbn']
    
    this.booksService.getBooks(this.isbn)
    .subscribe(data => {
      this.books = data;
    },
    error => console.log(error));
  }

  updateBooks(){
    this.booksService.updateBooks(this.isbn, this.books)
    .subscribe(data =>{
      console.log(data);
      this.books = new Books();
      this.gotoList();
    },
    error => console.log(error));
  }
   onSubmit(){
     this.updateBooks();
   }

   gotoList(){
     this.router.navigate(['books']);
   }
}
