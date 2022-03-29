import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:9090/employee'

  constructor(private http : HttpClient) { }

  getEmployee(employee_id : number):Observable<any>{
    return this.http.get(`${this.baseURL}/${employee_id}`);
  }

  createEmployee(employee : Object) : Observable<Object>{ 
    return this.http.post(`${this.baseURL}/addEmployee`,employee);
  }

  updateEmployee(employee_id : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${employee_id}`, value);
  }

  deleteEmployee(employee_id : number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${employee_id}`, { responseType : 'text'});
  }

  getEmployeeList() : Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
