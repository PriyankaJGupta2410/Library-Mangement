package main.java.com.LibraryManagement.LibraryManagewebapp.service;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Return_status;
import main.java.com.LibraryManagement.LibraryManagewebapp.repository.ReturnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReturnService {

    @Autowired
    private ReturnRepository returnRepository;

    public Return_status saveReturn(Return_status return_status){
        return returnRepository.save(return_status);
    }

    public List<Return_status> saveReturns(List<Return_status> return_statuses){
        return  returnRepository.saveAll(return_statuses);
    }

    public List<Return_status> getReturn(){
        return returnRepository.findAll();
    }

    public Return_status getReturnById(int return_id){
        return returnRepository.findById(return_id).orElse(null);
    }

    public String deleteReturn(int return_id){
        returnRepository.deleteById(return_id);
        return "Return Status is Removed!!!"+return_id;
    }

    public Return_status updateReturn(int return_id,Return_status return_status){
        Return_status existingReturn = returnRepository.findById(return_id).orElse(null);
        existingReturn.setReturn_cust(return_status.getReturn_cust());
        existingReturn.setReturnBookName(return_status.getReturnBookName());
        existingReturn.setReturnDate(return_status.getReturnDate());
        existingReturn.setIsbnBook2(return_status.getIsbnBook2());
        return returnRepository.save(existingReturn);
    }
}
