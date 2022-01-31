package main.java.com.LibraryManagement.LibraryManagewebapp.repository;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Issue_status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue_status, Integer> {
}
