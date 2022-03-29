import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  branch : Branch = new Branch();
  submitted = false;

  constructor(private branchService : BranchService,
    private router : Router) { }

  ngOnInit(){
  }

  newBranch() : void {
    this.submitted = false;
    this.branch = new Branch();
  }

  save(){
    this.branchService
    .createBranch(this.branch)
    .subscribe(data => {
      console.log(data),
      this.branch = new Branch();
    },
    error => console.log(error));
  }
    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList(){
      this.router.navigate(['/branch']);
    }

}
