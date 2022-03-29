import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee_id : number;
  employee : Employee;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private employeeService : EmployeeService) { }

    ngOnInit(){
      this.employee = new Employee();
        
      this.employee_id = this.route.snapshot.params['employee_id']
        
      this.employeeService.getEmployee(this.employee_id)
      .subscribe(data => {
      this.employee = data;
      },
      error => console.log(error));
    }
    
    updateEmployee(){
      this.employeeService.updateEmployee(this.employee_id, this.employee)
      .subscribe(data =>{
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      error => console.log(error));
    }
       
     onSubmit(){
       this.updateEmployee();
      }
    
     gotoList(){
       this.router.navigate(['employee']);
    }

}
