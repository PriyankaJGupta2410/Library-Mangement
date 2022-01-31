package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "IssueStatus")
public class Issue_status {

    @Id
    private int issue_id;

    @Column(name = "issue_book_name")
    private String issueBookName;

    @Column(name = "issue_cust")
    private int issue_cust;

    @Column(name = "issue_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date issueDate;

    @Column(name = "isbn_book")
    private int isbn_book;

    public int getIssue_id() {
        return issue_id;
    }

    public void setIssue_id(int issue_id) {
        this.issue_id = issue_id;
    }

    public int getIssue_cust() {
        return issue_cust;
    }

    public void setIssue_cust(int issue_cust) {
        this.issue_cust = issue_cust;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public String getIssueBookName() {
        return issueBookName;
    }

    public void setIssueBookName(String issueBookName) {
        this.issueBookName = issueBookName;
    }

    public int getIsbn_book() {
        return isbn_book;
    }

    public void setIsbn_book(int isbn_book) {
        this.isbn_book = isbn_book;
    }

    public Issue_status() {
    }

    public Issue_status(int issue_id,int issue_cust, String issueBookName, Date issueDate, int isbn_book){
        super();
        this.issue_id = issue_id;
        this.issue_cust = issue_cust;
        this.issueBookName = issueBookName;
        this.issueDate = issueDate;
        this.isbn_book = isbn_book;
    }
}
