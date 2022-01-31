package main.java.com.LibraryManagement.LibraryManagewebapp.repository;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Employee_Repository extends JpaRepository<Employee, Integer> {


}
