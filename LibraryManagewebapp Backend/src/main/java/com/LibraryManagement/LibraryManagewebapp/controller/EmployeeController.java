package main.java.com.LibraryManagement.LibraryManagewebapp.controller;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Employee;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService  employeeService;

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @PostMapping("/addEmployees")
    public List<Employee> addEmployees(@RequestBody List<Employee> employees){
        return employeeService.saveEmployees(employees);
    }

    @GetMapping()
    public List<Employee> findAllEmployee(){
        return employeeService.getEmployee();
    }

    @GetMapping("/{employee_id}")
    public Employee findEmployeeById(@PathVariable int employee_id){
        return employeeService.getEmployeeById(employee_id);
    }

    @PutMapping("/update/{employee_id}")
    public Employee updateEmployee(@PathVariable int employee_id,@RequestBody Employee employee){
        return employeeService.updateEmployee(employee_id,employee);
    }

    @DeleteMapping("/delete/{employee_id}")
    public String deleteEmployee(@PathVariable int employee_id){
        return employeeService.deleteEmployee(employee_id);
    }
}