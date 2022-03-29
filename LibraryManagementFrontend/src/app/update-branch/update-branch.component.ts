import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {

  branch_no : number;
  branch : Branch;
  
  constructor(private router:Router,
    private route : ActivatedRoute,
    private branchService : BranchService) { }

  ngOnInit(){
    this.branch = new Branch();
      
    this.branch_no = this.route.snapshot.params['branch_no']
      
    this.branchService.getBranch(this.branch_no)
    .subscribe(data => {
    this.branch = data;
    },
    error => console.log(error));
  }
  
  updateBranch(){
    this.branchService.updateBranch(this.branch_no, this.branch)
    .subscribe(data =>{
      console.log(data);
      this.branch = new Branch();
      this.gotoList();
    },
    error => console.log(error));
  }
     
   onSubmit(){
     this.updateBranch();
    }
  
   gotoList(){
     this.router.navigate(['branch']);
  }

}
