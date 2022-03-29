import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueStatusService {

  private baseURL = 'http://localhost:9090/issue_status'

  constructor(private http:HttpClient) { }

  getIssue(issue_id : number):Observable<any>{
    return this.http.get(`${this.baseURL}/${issue_id}`);
  }

  createIssue(IssueStatus : Object) : Observable<Object>{ 
    
    return this.http.post(`${this.baseURL}/addIssue`,IssueStatus);
  }

  updateIssue(issue_id : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${issue_id}`, value);
  }

  deleteIssue(issue_id : number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${issue_id}`, { responseType : 'text'});
  }

  getIssueList() : Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
