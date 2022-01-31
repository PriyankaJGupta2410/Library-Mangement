package main.java.com.LibraryManagement.LibraryManagewebapp.service;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Books;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService{

    @Autowired
    private BooksRepository booksRepository;

    public Books saveBook(Books book){
        return booksRepository.save(book);
    }

    public List<Books> saveBooks(List<Books> books){
        return booksRepository.saveAll(books);
    }

    public List<Books> getBooks(){
        return booksRepository.findAll();
    }

    public Books getBooksById(int ISBN){
        return booksRepository.findById(ISBN).orElse(null);
    }

    public String deleteBooks(int ISBN){
        booksRepository.deleteById(ISBN);
        return "Books removed !!" +ISBN;
    }

    public Books updateBooks(Books books){
        Books existingBooks = booksRepository.findById(books.getISBN()).orElse(null);
        existingBooks.setBookTitle(books.getBookTitle());
        existingBooks.setCategory(books.getCategory());
        existingBooks.setRentalPrice(books.getRentalPrice());
        existingBooks.setStatus(books.getStatus());
        existingBooks.setAuthor(books.getAuthor());
        existingBooks.setPublisher(books.getPublisher());
        return booksRepository.save(existingBooks);
    }
}
