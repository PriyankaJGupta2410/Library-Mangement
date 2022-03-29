package main.java.com.LibraryManagement.LibraryManagewebapp.controller;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Issue_status;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/issue_status")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @PostMapping("/addIssue")
    public Issue_status addIssue(@RequestBody Issue_status issue_status){
        return issueService.saveIssue((issue_status));
    }

    @PostMapping("/addIssues")
    public List<Issue_status> addIssues(@RequestBody List<Issue_status> issue_statuses){
        return issueService.saveIssues(issue_statuses);
    }

    @GetMapping()
    public List<Issue_status> findAllIssue(){
        return  issueService.getIssues();
    }

    @GetMapping("/{issue_id}")
    public Issue_status findIssuesById(@PathVariable int issue_id){
        return issueService.getIssueById(issue_id);
    }

    @PutMapping("/update/{issue_id}")
    public Issue_status updateIssue(@PathVariable int issue_id,@RequestBody Issue_status issue_status){
        return  issueService.updateIssue(issue_id,issue_status);
    }

    @DeleteMapping("/delete/{issue_id}")
    public String deleteIssue(@PathVariable int issue_id){
        return issueService.deleteIssue(issue_id);
    }
}
