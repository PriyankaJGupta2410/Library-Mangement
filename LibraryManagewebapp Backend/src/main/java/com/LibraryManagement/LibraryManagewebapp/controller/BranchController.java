package main.java.com.LibraryManagement.LibraryManagewebapp.controller;


import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Branch;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/branch")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @PostMapping("/addBranch")
    public Branch addBranch(@RequestBody Branch branch){
        return branchService.saveBranch(branch);
    }

    @PostMapping("/addBranches")
    public List<Branch> addBranches(@RequestBody List<Branch> branches){
        return branchService.saveBranches(branches);
    }

    @GetMapping()
    public List<Branch> findAllBranch(){
        return branchService.getBranch();
    }

    @GetMapping("/{branch_no}")
    public Branch findBranchById(@PathVariable int branch_no){
        return branchService.getBranchById(branch_no);
    }

    @PutMapping("/update/{branch_no}")
    public Branch updateBranchById(@PathVariable int branch_no,@RequestBody Branch branch){
        return branchService.updateBranchById(branch_no,branch);
    }

    @DeleteMapping("/delete/{branch_no}")
    public String deleteBranch(@PathVariable int branch_no){
        return branchService.deleteBranch(branch_no);
    }
}
