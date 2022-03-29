import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueStatusService } from '../issue-status.service';
import { IssueStatus } from '../IssueStatus';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {

  issue_id : number;
  issueStatus : IssueStatus;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private issueStatusService : IssueStatusService) { }

    ngOnInit(){
      this.issueStatus = new IssueStatus();
        
      this.issue_id = this.route.snapshot.params['issue_id']
        
      this.issueStatusService.getIssue(this.issue_id)
      .subscribe(data => {
      this.issueStatus = data;
      },
      error => console.log(error));
    }
    
    updateIssue(){
      this.issueStatusService.updateIssue(this.issue_id, this.issueStatus)
      .subscribe(data =>{
        console.log(data);
        this.issueStatus = new IssueStatus();
        this.gotoList();
      },
      error => console.log(error));
    }
       
     onSubmit(){
       this.updateIssue();
      }
    
     gotoList(){
       this.router.navigate(['issueStatus']);
    }
  

}
