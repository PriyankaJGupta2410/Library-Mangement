import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:9090/customer'
  
  constructor(private http : HttpClient) { }

  getCustomer(customer_id : number):Observable<any>{
    return this.http.get(`${this.baseURL}/${customer_id}`);
  }

  createCustomer(customer : Object) : Observable<Object>{ 
    
    return this.http.post(`${this.baseURL}/addCustomer`,customer);
  }

  updateCustomer(customer_id : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${customer_id}`, value);
  }

  deleteCustomer(customer_id : number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${customer_id}`, { responseType : 'text'});
  }

  getCustomerList() : Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
