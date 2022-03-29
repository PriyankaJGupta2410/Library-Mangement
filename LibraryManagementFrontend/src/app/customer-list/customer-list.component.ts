import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer : Observable<Customer[]>

  constructor(private router : Router,
    private customerService : CustomerService) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.customer = this.customerService.getCustomerList();
  }

  deleteCustomer(customer_id : number){ 
    this.customerService.deleteCustomer(customer_id)
    .subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  customerDetails(customer_id : number){
    this.router.navigate(['customerDetails',customer_id])
  }

  updateCustomer(customer_id : number){
    this.router.navigate(['updateCustomer', customer_id])
  }

}
