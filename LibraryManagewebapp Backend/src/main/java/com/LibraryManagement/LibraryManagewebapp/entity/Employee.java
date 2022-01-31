package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "employee")
public class Employee {

//    employee_id,employee_Name, position,salary

    @Id
    private int employee_id;

    @Column(name = "employee_Name")
    private String employeeName;

    @Column(name = "position")
    private String position;

    @Column(name = "salary")
    private int salary;

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Employee(){
        super();
    }

    public Employee(int employee_id, String employeeName, String position, int salary){
        super();
        this.employee_id = employee_id;
        this.employeeName = employeeName;
        this.position = position;
        this.salary = salary;
    }

}
