package main.java.com.LibraryManagement.LibraryManagewebapp.service;


import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Branch;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BranchService{

    @Autowired
    private BranchRepository branchRepository;

    public Branch saveBranch(Branch branch){
        return branchRepository.save(branch);
    }

    public List<Branch>saveBranches(List<Branch> branches){
        return branchRepository.saveAll(branches);
    }

    public List<Branch> getBranch(){
        return branchRepository.findAll();
    }

    public Branch getBranchById(int branch_no){
        return branchRepository.findById(branch_no).orElse(null);
    }

    public String deleteBranch(int branch_no){
        branchRepository.deleteById(branch_no);
        return "Branch removed !!" +branch_no;
    }

    public Branch updateBranchById(int branch_no,Branch branch){
        Branch existingBranch = branchRepository.findById(branch_no).orElse(null);
        existingBranch.setManagerId(branch.getManagerId());
        existingBranch.setBranchAddress(branch.getBranchAddress());
        existingBranch.setContactNo(branch.getContactNo());
        return branchRepository.save(existingBranch);
    }
}
