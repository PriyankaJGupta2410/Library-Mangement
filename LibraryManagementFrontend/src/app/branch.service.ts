import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private baseURL = 'http://localhost:9090/branch'

  constructor(private http : HttpClient) {}

  getBranch(branch_no : number):Observable<any>{
    return this.http.get(`${this.baseURL}/${branch_no}`);
  }

  createBranch(branch : Object) : Observable<Object>{ 
    
    return this.http.post(`${this.baseURL}/addBranch`,branch);
  }

  updateBranch(branch_no : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${branch_no}`, value);
  }

  deleteBranch(branch_no : number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${branch_no}`, { responseType : 'text'});
  }

  getBranchList() : Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
