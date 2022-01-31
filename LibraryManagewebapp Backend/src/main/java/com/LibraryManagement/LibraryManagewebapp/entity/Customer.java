package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.engine.internal.Cascade;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Data
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    private int customer_id;

    @Column(name = "Customer_Address")
    private String customerAddress;

    @Column(name = "Customer_Name")
    private String customerName;

    @Column(name = "Registration_Date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date registrationDate;

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Customer(){
        super();
    }

    public Customer(int customer_id, String customerAddress, String customerName,Date registrationDate){
        super();
        this.customer_id = customer_id;
        this.customerAddress = customerAddress;
        this.customerName = customerName;
        this.registrationDate = registrationDate;
    }
}
