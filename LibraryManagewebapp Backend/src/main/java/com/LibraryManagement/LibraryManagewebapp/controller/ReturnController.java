package main.java.com.LibraryManagement.LibraryManagewebapp.controller;

import main.java.com.LibraryManagement.LibraryManagewebapp.entity.Return_status;
import main.java.com.LibraryManagement.LibraryManagewebapp.service.ReturnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/returnStatus")
public class ReturnController {

    @Autowired
    private ReturnService returnService;

    @PostMapping("/addReturn")
    public Return_status addReturn(@RequestBody Return_status return_status){
        return returnService.saveReturn(return_status);
    }

    @PostMapping("/addReturns")
    public List<Return_status> addReturns(@RequestBody List<Return_status> return_statuses){
        return  returnService.saveReturns(return_statuses);
    }

    @GetMapping("/")
    public List<Return_status> findAllReturn(){
        return  returnService.getReturn();
    }

    @GetMapping("/{return_id}")
    public Return_status findReturnById(@PathVariable int return_id){
        return  returnService.getReturnById(return_id);
    }

    @PutMapping("/update")
    public Return_status updateReturn(@RequestBody Return_status return_status){
        return  returnService.updateReturn(return_status);
    }

    @DeleteMapping("/delete/{return_id}")
    public String deleteReturn(@PathVariable int return_id){
        return returnService.deleteReturn(return_id);
    }
}
