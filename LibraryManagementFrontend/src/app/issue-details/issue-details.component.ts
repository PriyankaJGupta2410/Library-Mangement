import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueStatusService } from '../issue-status.service';
import { IssueStatus } from '../IssueStatus';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  issue_id : number;
  issueStatus : IssueStatus

  constructor(private route : ActivatedRoute,
    private router : Router,
    private issueStatusService : IssueStatusService) { }

  ngOnInit(){
    this.issueStatus= new IssueStatus();
        
    this.issue_id = this.route.snapshot.params['issue_id'];
        
    this.issueStatusService.getIssue(this.issue_id)
      .subscribe(data =>{
        this.issueStatus = data;
      },
      error => console.log(error));
    }
      
    list(){
      this.router.navigate(['issueStatus']);
    }

}
