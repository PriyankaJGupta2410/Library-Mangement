import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee : Observable<Employee[]>

  constructor(private router : Router,
    private employeeService : EmployeeService) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.employee = this.employeeService.getEmployeeList();
  }

  deleteEmployee(employee_id : number){ 
    this.employeeService.deleteEmployee(employee_id)
    .subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  employeeDetails(employee_id : number){
    this.router.navigate(['employeeDetails',employee_id])
  }

  updateEmployee(employee_id : number){
    this.router.navigate(['updateEmployee', employee_id])
  }

}
