package main.java.com.LibraryManagement.LibraryManagewebapp.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "branch")

public class Branch{

   @Id
   private int branch_no;

   @Column(name = "manager_id")
   private int managerId;

   @Column(name = "branch_address")
   private String branchAddress;

   @Column(name = "Contact_no")
   private int contactNo;

    public int getBranch_no() {
        return branch_no;
    }

    public void setBranch_no(int branch_no) {
        this.branch_no = branch_no;
    }

    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    public void setBranchAddress(String branchAddress) {
        this.branchAddress = branchAddress;
    }

    public String getBranchAddress() {
        return branchAddress;
    }

    public int getContactNo() {
        return contactNo;
    }

    public void setContactNo(int contactNo) {
        this.contactNo = contactNo;
    }

    public Branch(){
        super();
    }

    public Branch(int branch_no, int managerId, String branchAddress, int contactNo){
        super();
        this.branch_no = branch_no;
        this.managerId = managerId;
        this.branchAddress = branchAddress;
        this.contactNo = contactNo;
    }
}
