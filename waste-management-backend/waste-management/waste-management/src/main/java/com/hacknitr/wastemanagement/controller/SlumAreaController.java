package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.SlumArea;
import com.hacknitr.wastemanagement.sevice.SlumAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/slum-area")
public class SlumAreaController {

    @Autowired
    private SlumAreaService slumAreaService;

    @PostMapping("/")
    public ResponseEntity<SlumArea> registerSlumAreaInApp(@RequestBody SlumArea slumArea){
        SlumArea theSlumArea=this.slumAreaService.registerSlumArea(slumArea);
        return ResponseEntity.ok(theSlumArea);
    }

    @GetMapping("/getAllSlumArea")
    public ResponseEntity<List<SlumArea>> getAllRegisteredSlumArea(){
        List<SlumArea> slumAreas=this.slumAreaService.getAllSlumAreas();
        return ResponseEntity.ok(slumAreas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SlumArea> getSlumArea(@PathVariable Long id){
        SlumArea slumArea=this.slumAreaService.getSlumAreaDetails(id);
        return ResponseEntity.ok(slumArea);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRegisteredSlumArea(@PathVariable Long id){
        this.slumAreaService.deleteSlumArea(id);
        return ResponseEntity.ok("slum area is successfully deleted");
    }
}
