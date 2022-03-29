import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ Branch} from '../branch'
import {BranchService} from '../branch.service'

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  branch_no : number;
  branch : Branch;

  constructor(private route : ActivatedRoute,
    private router: Router,
    private branchService : BranchService) { }

  ngOnInit(){
    this.branch = new Branch();
      
    this.branch_no = this.route.snapshot.params['branch_no'];
      
    this.branchService.getBranch(this.branch_no)
      .subscribe(data =>{
        this.branch = data;
      },
      error => console.log(error));
    }
    list(){
      this.router.navigate(['branch']);
    }

}
