package main.java.com.LibraryManagement.LibraryManagewebapp.service;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Employee;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.Employee_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private Employee_Repository employeeRepository;

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> saveEmployees(List<Employee> employees){
        return employeeRepository.saveAll(employees);
    }

    public List<Employee> getEmployee(){
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(int employee_id){
        return employeeRepository.findById(employee_id).orElse(null);
    }

    public String deleteEmployee(int employee_id){
        employeeRepository.deleteById(employee_id);
        return "Employee Removed !!!" +employee_id;
    }

    public Employee updateEmployee(int employee_id,Employee employee){
        Employee existingEmployee = employeeRepository.findById(employee_id).orElse(null);
        existingEmployee.setEmployee_id(employee.getEmployee_id());
        existingEmployee.setEmployeeName(employee.getEmployeeName());
        existingEmployee.setPosition(employee.getPosition());
        existingEmployee.setSalary(employee.getSalary());
        return employeeRepository.save(existingEmployee);
    }
}
