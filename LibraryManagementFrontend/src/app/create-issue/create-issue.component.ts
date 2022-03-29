import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueStatus} from '../IssueStatus';
import { IssueStatusService} from '../issue-status.service'

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {

  issueStatus : IssueStatus = new IssueStatus();
  submitted = false;

  constructor(private issueStatusService : IssueStatusService,
    private router : Router) { }

  ngOnInit(): void {
  }

  newIssueStatus() : void {
    this.submitted = false;
    this.issueStatus = new IssueStatus();
  }

  save(){
    this.issueStatusService
    .createIssue(this.issueStatus)
    .subscribe(data => {
      console.log(data),
      this.issueStatus = new IssueStatus();
    },
    error => console.log(error));
  }
    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList(){
      this.router.navigate(['/']);this.issueStatus
    }
}
