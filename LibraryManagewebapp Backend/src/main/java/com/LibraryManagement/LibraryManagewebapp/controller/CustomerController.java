package main.java.com.LibraryManagement.LibraryManagewebapp.controller;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Customer;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/addCustomer")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerService.saveCustomer(customer);
    }

    @PostMapping("/addCustomers")
    public List<Customer> addCustomers(@RequestBody List<Customer> customers){
        return customerService.saveCustomers(customers);
    }

    @GetMapping()
    public List<Customer> findAllCustomer(){
        return customerService.getCustomer();
    }

    @GetMapping("/{customer_id}")
    public Customer findCustomerById(@PathVariable int customer_id){
        return customerService.getCustomerById(customer_id);
    }

    @PutMapping("/update/{customer_id}")
    public Customer updateCustomer(@PathVariable int customer_id,@RequestBody Customer customer){
        return customerService.updateCustomer(customer_id,customer);
    }

    @DeleteMapping("/delete/{customer_id}")
    public String deleteCustomer(@PathVariable int customer_id){
        return customerService.deleteCustomer(customer_id);
    }
}
