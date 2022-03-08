package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.model.Society;
import com.hacknitr.wastemanagement.sevice.CategoryService;
import com.hacknitr.wastemanagement.sevice.SocietyService;
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
@RequestMapping("/society")
public class SocietyController {

    @Autowired
    private SocietyService societyService;

    @PostMapping(value="/",headers = "content-type=multipart/*")
    public ResponseEntity<?> registerSociety(@RequestParam("societyImage") MultipartFile file, @RequestParam("name") String name, @RequestParam("email") String email,@RequestParam("address") String address) throws IOException {

        Society society= new Society();
        society.setName(name);
        society.setEmail(email);
        society.setAddress(address);
        try {
            society.setPicByte(compressBytes(file.getBytes()));
        }catch(Exception e) {
            e.printStackTrace();

        }
        this.societyService.createSociety(society);
        return ResponseEntity.ok("society is added succesfully");
    }

    @GetMapping("/getAllSociety")
    public ResponseEntity<?> getAllSocietyDetails(){
        List<Society> allSocieties=this.societyService.allSocieties();
        for(Society society:allSocieties) {
            society.setPicByte(decompressBytes(society.getPicByte()));
        }
        return ResponseEntity.ok(allSocieties);
    }

    //delete any category
    @DeleteMapping("/{id}")
    public ResponseEntity deleteSociety(@PathVariable Long id){
        this.societyService.deleteSociety(id);
        return ResponseEntity.ok("society deleted successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Society> getSociety(@PathVariable Long id){
        Society society=this.societyService.viewSociety(id);
        System.out.println(society);
        society.setPicByte(decompressBytes(society.getPicByte()));
        return ResponseEntity.ok(society);
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
