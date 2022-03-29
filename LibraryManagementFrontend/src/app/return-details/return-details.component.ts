import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnStatus } from '../returnStatus';
import { ReturnStatusService } from '../return-status.service';

@Component({
  selector: 'app-return-details',
  templateUrl: './return-details.component.html',
  styleUrls: ['./return-details.component.css']
})
export class ReturnDetailsComponent implements OnInit {

  return_id : number;
  returnStatus : ReturnStatus;

  constructor(private route : ActivatedRoute,
    private router : Router,
    private returnStatusService : ReturnStatusService) { }

  ngOnInit(){
    this.returnStatus= new ReturnStatus();
        
    this.return_id = this.route.snapshot.params['return_id'];
        
    this.returnStatusService.getReturn(this.return_id)
      .subscribe(data =>{
        this.returnStatus = data;
      },
      error => console.log(error));
    }
      
    list(){
      this.router.navigate(['returnStatus']);
    }

}
