import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnStatus } from '../returnStatus';
import { ReturnStatusService } from '../return-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-list',
  templateUrl: './return-list.component.html',
  styleUrls: ['./return-list.component.css']
})
export class ReturnListComponent implements OnInit {

  returnStatus : Observable<ReturnStatus[]>

  constructor(private router : Router,
    private returnStatusService : ReturnStatusService) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.returnStatus = this.returnStatusService.getReturnList();
  }

  deleteReturn(return_id : number){ 
    this.returnStatusService.deleteReturn(return_id)
    .subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  returnDetails(return_id : number){
    this.router.navigate(['returnDetails',return_id])
  }

  updateReturn(return_id : number){
    this.router.navigate(['updateReturn', return_id])
  }


}
