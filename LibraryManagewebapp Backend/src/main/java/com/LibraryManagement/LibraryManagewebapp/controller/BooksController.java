package main.java.com.LibraryManagement.LibraryManagewebapp.controller;


import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Books;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BooksController {

    @Autowired
    private BookService bookService;

    @PostMapping("/addBook")
    public Books addBook(@RequestBody Books book){
        return bookService.saveBook(book);
    }

    @PostMapping("/addBooks")
    public List<Books> addBooks(@RequestBody List<Books> books){
        return bookService.saveBooks(books);
    }

    @GetMapping()
    public List<Books> findAllBooks(){
        return bookService.getBooks();
    }

    @GetMapping("/{ISBN}")
    public Books findBooksById(@PathVariable int ISBN){
        return bookService.getBooksById(ISBN);
    }

    @PutMapping("/update/{ISBN}")
    public Books updateById(@PathVariable int ISBN, @RequestBody Books books){
        return bookService.updateBooksById(ISBN, books);
    }

    @DeleteMapping("/delete/{ISBN}")
    public String deleteBooks(@PathVariable int ISBN){
        return bookService.deleteBooks(ISBN);
    }

}
