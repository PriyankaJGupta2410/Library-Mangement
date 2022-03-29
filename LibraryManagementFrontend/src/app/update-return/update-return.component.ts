import { Component, OnInit } from '@angular/core';
import { ReturnStatus } from '../returnStatus';
import { ReturnStatusService } from '../return-status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-return',
  templateUrl: './update-return.component.html',
  styleUrls: ['./update-return.component.css']
})
export class UpdateReturnComponent implements OnInit {

  return_id : number;
  returnStatus : ReturnStatus;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private returnStatusService : ReturnStatusService) { }

    ngOnInit(){
      this.returnStatus = new ReturnStatus();
        
      this.return_id = this.route.snapshot.params['return_id']
        
      this.returnStatusService.getReturn(this.return_id)
      .subscribe(data => {
      this.returnStatus = data;
      },
      error => console.log(error));
    }
    
    updateReturn(){
      this.returnStatusService.updateReturn(this.return_id, this.returnStatus)
      .subscribe(data =>{
        console.log(data);
        this.returnStatus = new ReturnStatus();
        this.gotoList();
      },
      error => console.log(error));
    }
       
     onSubmit(){
       this.updateReturn();
      }
    
     gotoList(){
       this.router.navigate(['returnStatus']);
    }

}
