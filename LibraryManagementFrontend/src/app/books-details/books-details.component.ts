import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

  isbn : number;
  books : Books;
  
  constructor(private route : ActivatedRoute,
    private router : Router,
    private booksService : BooksService) { }

  ngOnInit(){
    this.books = new Books();
    
    this.isbn = this.route.snapshot.params['isbn'];
    
    this.booksService.getBooks(this.isbn)
    .subscribe(data =>{
      this.books = data;
    },
    error => console.log(error));
  }
  list(){
    this.router.navigate(['books']);
  }
}
