import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnStatusService {

  private baseURL = 'http://localhost:9090/returnStatus'

  constructor(private http:HttpClient) { }

  getReturn(return_id : number):Observable<any>{
    return this.http.get(`${this.baseURL}/${return_id}`);
  }

  createReturn(ReturnStatus : Object) : Observable<Object>{ 
    
    return this.http.post(`${this.baseURL}/addReturn`,ReturnStatus);
  }

  updateReturn(return_id : number,value : any) : Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${return_id}`, value);
  }

  deleteReturn(return_id : number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${return_id}`, { responseType : 'text'});
  }

  getReturnList() : Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
