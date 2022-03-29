import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IssueStatusService } from '../issue-status.service';
import { IssueStatus } from '../IssueStatus';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issueStatus : Observable<IssueStatus[]>

  constructor(private router : Router,
    private issueStatusService : IssueStatusService) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.issueStatus = this.issueStatusService.getIssueList();
  }

  deleteIssue(issue_id : number){ 
    this.issueStatusService.deleteIssue(issue_id)
    .subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  issueDetails(issue_id : number){
    this.router.navigate(['issueDetails',issue_id])
  }

  updateIssue(issue_id : number){
    this.router.navigate(['updateIssue', issue_id])
  }

}
