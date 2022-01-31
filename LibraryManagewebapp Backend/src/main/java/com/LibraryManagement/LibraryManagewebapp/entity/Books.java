package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Books")
public class Books {


    @Id
    private int ISBN;


    @Column(name = "Book_Title")
    private String BookTitle;

    @Column(name = "Category")
    private String category;

    @Column(name = "Rental_price")
    private int RentalPrice;

    @Column(name = "Status")
    private String Status;

    @Column(name = "Author")
    private String author;

    @Column(name = "Publisher")
    private String publisher;

    public int getISBN() {
        return ISBN;
    }

    public void setISBN(int ISBN) {
        this.ISBN = ISBN;
    }

    public String getBookTitle() {
        return BookTitle;
    }

    public void setBookTitle(String bookTitle) {
        BookTitle = bookTitle;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getRentalPrice() {
        return RentalPrice;
    }

    public void setRentalPrice(int rentalPrice) {
        RentalPrice = rentalPrice;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Books(){
        super();
    }

    public Books(int ISBN, String BookTitle, String category, int RentalPrice, String Status, String author, String publisher){
        super();
        this.ISBN = ISBN;
        this.BookTitle = BookTitle;
        this.category = category;
        this.RentalPrice = RentalPrice;
        this.Status = Status;
        this.author = author;
        this.publisher = publisher;
    }
}
