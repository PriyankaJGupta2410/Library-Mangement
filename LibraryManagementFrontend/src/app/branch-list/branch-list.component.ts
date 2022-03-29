import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branch : Observable<Branch[]>

  constructor(private router : Router,
    private branchService:BranchService) { }

    ngOnInit(){
      this.reloadData();
    }
    reloadData(){
      this.branch = this.branchService.getBranchList();
    }
  
    deleteBranch(branch_no : number){ 
      this.branchService.deleteBranch(branch_no)
      .subscribe(data =>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }
  
    branchDetails(branch_no : number){
      this.router.navigate(['branchDetails',branch_no])
    }
  
    updateBranch(branch_no : number){
      this.router.navigate(['updateBranch', branch_no])
    }

}
