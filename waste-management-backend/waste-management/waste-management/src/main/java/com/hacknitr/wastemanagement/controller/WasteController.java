package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.model.WasteMaterial;
import com.hacknitr.wastemanagement.response.WasteMaterialResponse;
import com.hacknitr.wastemanagement.sevice.CategoryService;
import com.hacknitr.wastemanagement.sevice.WasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@RequestMapping("/waste")
public class WasteController {

    @Autowired
    private WasteService wasteService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping(value="/",headers = "content-type=multipart/*")
    public ResponseEntity registerWaste(@RequestParam("wasteImage") MultipartFile file, @RequestParam("name") String name, @RequestParam("description") String description,@RequestParam("userId") Long userId,@RequestParam("categoryId") Long categoryId) {
        WasteMaterial wasteMaterial = new WasteMaterial();
        System.out.println(name+" "+categoryId);
        wasteMaterial.setName(name);
        wasteMaterial.setDescription(description);
        wasteMaterial.setUserId(userId);
        Category category=this.categoryService.viewCategory(categoryId);
        wasteMaterial.setCategory(category);
        try {
            wasteMaterial.setPicByte(compressBytes(file.getBytes()));
        } catch (Exception e) {
            e.printStackTrace();

        }
        this.wasteService.uploadWaste(wasteMaterial);
        return ResponseEntity.ok("waste material is uploaded  succesfully");
    }

    @GetMapping("/getAllWasteMaterial/{id}")
    public ResponseEntity<?> getAllWasteMaterialDetails(@PathVariable("id") Long userId){
        List<WasteMaterial> wasteMaterials=this.wasteService.getAllWasteMaterialsByUserId(userId);
        for(WasteMaterial wasteMaterial:wasteMaterials) {
            wasteMaterial.setPicByte(decompressBytes(wasteMaterial.getPicByte()));
        }
        return ResponseEntity.ok(wasteMaterials);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUploadedWaste(@PathVariable("id") Long wasteId){
        this.wasteService.deleteWaste(wasteId);


        return ResponseEntity.ok("uploaded waste is deleted successfully");
    }

    @GetMapping("/getWasteDetails/{id}")
    public ResponseEntity getWasteProductDetails(@PathVariable("id") Long id){
        WasteMaterial wasteMaterial=this.wasteService.getWasteByUserId(id);
        WasteMaterialResponse wasteMaterialResponse=new WasteMaterialResponse();
        wasteMaterialResponse.setId(wasteMaterial.getId());
        wasteMaterialResponse.setName(wasteMaterial.getName());
        wasteMaterialResponse.setCategoryName(wasteMaterial.getCategory().getCategoryName());
        wasteMaterialResponse.setPicByte(decompressBytes(wasteMaterial.getPicByte()));
        wasteMaterialResponse.setUserId(wasteMaterial.getUserId());
        return ResponseEntity.ok(wasteMaterialResponse);
    }

    @GetMapping("/getAllWastes")
    public ResponseEntity<List<WasteMaterial>> getAllWastes(){
        List<WasteMaterial> wastes=wasteService.getAllWastes();
        for(WasteMaterial wasteMaterial:wastes) {
            wasteMaterial.setPicByte(decompressBytes(wasteMaterial.getPicByte()));
        }
        return ResponseEntity.ok(wastes);
    }

    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }
    // uncompress the image bytes before returning it to the angular application
    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }



}
