package main.java.com.LibraryManagement.LibraryManagewebapp.repository;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Return_status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReturnRepository extends JpaRepository<Return_status, Integer> {

}
