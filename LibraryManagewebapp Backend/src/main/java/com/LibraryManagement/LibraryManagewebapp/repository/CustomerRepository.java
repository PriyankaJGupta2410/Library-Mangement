package main.java.com.LibraryManagement.LibraryManagewebapp.repository;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
