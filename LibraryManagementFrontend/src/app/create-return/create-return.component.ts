import { Component, OnInit } from '@angular/core';
import { ReturnStatus} from '../returnStatus';
import { ReturnStatusService } from '../return-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-return',
  templateUrl: './create-return.component.html',
  styleUrls: ['./create-return.component.css']
})
export class CreateReturnComponent implements OnInit {

  returnStatus : ReturnStatus = new ReturnStatus();
  submitted = false;

  constructor(private returnStatusService : ReturnStatusService,
    private router : Router) { }

  ngOnInit(): void {
  }

  newReturnStatus() : void {
    this.submitted = false;
    this.returnStatus = new ReturnStatus();
  }

  save(){
    this.returnStatusService
    .createReturn(this.returnStatus)
    .subscribe(data => {
      console.log(data),
      this.returnStatus = new ReturnStatus();
    },
    error => console.log(error));
  }
    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList(){
      this.router.navigate(['/']);this.returnStatus
    }

}
