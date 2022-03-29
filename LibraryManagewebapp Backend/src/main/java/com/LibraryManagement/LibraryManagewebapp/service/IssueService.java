package main.java.com.LibraryManagement.LibraryManagewebapp.service;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Issue_status;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    public Issue_status saveIssue(Issue_status issue_status){
        return issueRepository.save(issue_status);
    }

    public List<Issue_status> saveIssues(List<Issue_status> issue_statuses){
        return issueRepository.saveAll(issue_statuses);
    }

    public List<Issue_status> getIssues(){
        return issueRepository.findAll();
    }

    public Issue_status getIssueById(int issue_id){
        return issueRepository.findById(issue_id).orElse(null);
    }

    public String deleteIssue(int issue_id){
        issueRepository.deleteById(issue_id);
        return "Issued id is Removed!!!!" +issue_id;
    }

    public Issue_status updateIssue(int issue_id,Issue_status issue_status){
        Issue_status existingIssue = issueRepository.findById(issue_id).orElse(null);
        existingIssue.setIssue_cust(issue_status.getIssue_cust());
        existingIssue.setIssueBookName(issue_status.getIssueBookName());
        existingIssue.setIssueDate(issue_status.getIssueDate());
        existingIssue.setIsbn_book(issue_status.getIsbn_book());
        return issueRepository.save(existingIssue);
    }
}
