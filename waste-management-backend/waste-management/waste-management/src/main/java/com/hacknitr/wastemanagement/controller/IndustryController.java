package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.Industry;
import com.hacknitr.wastemanagement.sevice.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/industry")
public class IndustryController {

    @Autowired
    private IndustryService industryService;

    @PostMapping("/")
    public ResponseEntity registerIndustry(@RequestBody Industry industry){
        Industry theIndustry=this.industryService.registerIndustry(industry);
        return ResponseEntity.ok(theIndustry);
    }

    @GetMapping("/getAllIndustries")
    public ResponseEntity<?> getAllindustriesDetails(){
        List<Industry> industries=this.industryService.getAllIndustries();
        return ResponseEntity.ok(industries);
    }

    @GetMapping("/{id}")
    public ResponseEntity getIndustry(@PathVariable("id") Long id){
        Industry industry=this.industryService.getIndustryDetails(id);
        return ResponseEntity.ok(industry);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteIndustry(@PathVariable("id") Long id){
        this.industryService.deleteIndustry(id);
        return ResponseEntity.ok("industry deleted successfully");

    }


}
