package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "returnStatus")
public class Return_status {

    @Id
    private int return_id;

    @Column(name = "return_cust")
    private  int return_cust;

    @Column(name = "returned_Book_name")
    private String returnBookName;

    @Column(name = "return_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date returnDate;

    @Column(name = "isbn_book2")
    private int isbnBook2;

    public int getReturn_id() {
        return return_id;
    }

    public void setReturn_id(int return_id) {
        this.return_id = return_id;
    }

    public int getReturn_cust() {
        return return_cust;
    }

    public void setReturn_cust(int return_cust) {
        this.return_cust = return_cust;
    }

    public String getReturnBookName() {
        return returnBookName;
    }

    public void setReturnBookName(String returnBookName) {
        this.returnBookName = returnBookName;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public int getIsbnBook2() {
        return isbnBook2;
    }

    public void setIsbnBook2(int isbnBook2) {
        this.isbnBook2 = isbnBook2;
    }

    public  Return_status(){
        super();
    }

    public Return_status(int return_id,int return_cust,String returnBookName, Date returnDate, int isbnBook2){
        super();
        this.return_id = return_id;
        this.return_cust = return_cust;
        this.returnBookName = returnBookName;
        this.returnDate = returnDate;
        this.isbnBook2 = isbnBook2;
    }
}
