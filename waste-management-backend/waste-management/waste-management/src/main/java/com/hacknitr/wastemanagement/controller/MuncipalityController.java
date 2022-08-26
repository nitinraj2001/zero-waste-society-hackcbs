package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.Muncipality;
import com.hacknitr.wastemanagement.sevice.MuncipalityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/muncipality")
public class MuncipalityController {

    @Autowired
    private MuncipalityService muncipalityService;

    @PostMapping("/")
    public ResponseEntity<Muncipality> registerMuncipality(@RequestBody Muncipality muncipality){
        Muncipality theMuncipality=this.muncipalityService.registerMuncipality(muncipality);
       return  ResponseEntity.ok(theMuncipality);
    }

    @GetMapping("/getAllMuncipality")
    public ResponseEntity<List<Muncipality>> getAllMuncipalitiesDetails(){
        List<Muncipality> muncipality=this.muncipalityService.getAllRegisteredMuncipality();
        return ResponseEntity.ok(muncipality);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Muncipality> getMuncipalityDetails(@PathVariable("id") Long id){
        Muncipality muncipality=this.muncipalityService.getMuncipalityDetails(id);
        return ResponseEntity.ok(muncipality);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMuncipality(@PathVariable("id") Long id){
        this.muncipalityService.deleteMuncipality(id);
        return ResponseEntity.ok("Muncipality is deleted successfully");
    }

}
