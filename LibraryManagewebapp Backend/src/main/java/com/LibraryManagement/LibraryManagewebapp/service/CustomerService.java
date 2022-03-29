package main.java.com.LibraryManagement.LibraryManagewebapp.service;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Customer;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> saveCustomers(List<Customer> customers){
        return  customerRepository.saveAll(customers);
    }

    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int customer_id){
        return customerRepository.findById(customer_id).orElse(null);
    }

    public String deleteCustomer(int customer_id){
        customerRepository.deleteById(customer_id);
        return "Customer Removed !!" +customer_id;
    }

    public Customer updateCustomer(int customer_id,Customer customer){
        Customer existingCustomer = customerRepository.findById(customer_id).orElse(null);
        existingCustomer.setCustomerName(customer.getCustomerName());
        existingCustomer.setCustomerAddress(customer.getCustomerAddress());
        existingCustomer.setRegistrationDate(customer.getRegistrationDate());
        return customerRepository.save(existingCustomer);
    }
}
