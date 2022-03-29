import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer_id : number;
  customer : Customer

  constructor(private route : ActivatedRoute,
    private router : Router,
    private customerService : CustomerService) { }

  ngOnInit(){
    this.customer = new Customer();
        
    this.customer_id = this.route.snapshot.params['customer_id'];
        
    this.customerService.getCustomer(this.customer_id)
      .subscribe(data =>{
        this.customer = data;
      },
      error => console.log(error));
    }
      
    list(){
      this.router.navigate(['customer']);
    }
  

}
