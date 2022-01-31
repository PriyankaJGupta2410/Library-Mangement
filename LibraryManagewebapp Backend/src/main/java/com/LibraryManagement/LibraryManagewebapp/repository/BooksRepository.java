package main.java.com.LibraryManagement.LibraryManagewebapp.repository;


import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books,Integer> {

}
