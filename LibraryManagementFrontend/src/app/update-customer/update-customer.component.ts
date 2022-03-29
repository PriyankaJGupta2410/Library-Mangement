import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer_id : number;
  customer : Customer;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private customerService : CustomerService) { }

    ngOnInit(){
      this.customer = new Customer();
        
      this.customer_id = this.route.snapshot.params['customer_id']
        
      this.customerService.getCustomer(this.customer_id)
      .subscribe(data => {
      this.customer = data;
      },
      error => console.log(error));
    }
    
    updateCustomer(){
      this.customerService.updateCustomer(this.customer_id, this.customer)
      .subscribe(data =>{
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      },
      error => console.log(error));
    }
       
     onSubmit(){
       this.updateCustomer();
      }
    
     gotoList(){
       this.router.navigate(['customer']);
    }
  

}
