package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.sevice.CategoryService;
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
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping(value="/",headers = "content-type=multipart/*")
    public ResponseEntity<?> registerCategory(@RequestParam("categoryImage") MultipartFile file, @RequestParam("name") String name, @RequestParam("description") String description) throws IOException {

        Category wasteCategory= new Category();
        wasteCategory.setCategoryName(name);
        wasteCategory.setDescription(description);
        try {
            wasteCategory.setPicByte(compressBytes(file.getBytes()));
        }catch(Exception e) {
            e.printStackTrace();

        }
        this.categoryService.createCategory(wasteCategory);
        return ResponseEntity.ok("category is added succesfully");
    }

    //update category successfully
    @PutMapping(value="/",headers = "content-type=multipart/*")
    public ResponseEntity<?> updateCategory(@RequestParam("categoryImage") MultipartFile file, @RequestParam("name") String name, @RequestParam("description") String description) throws IOException {

        Category wasteCategory= new Category();
        wasteCategory.setCategoryName(name);
        wasteCategory.setDescription(description);
        try {
            wasteCategory.setPicByte(compressBytes(file.getBytes()));
        }catch(Exception e) {
            e.printStackTrace();

        }
        this.categoryService.updateCategory(wasteCategory);
        return ResponseEntity.ok("category is updated succesfully");
    }


    @GetMapping("/getAllWasteCategory")
    public ResponseEntity<?> getAllCategoryDetails(){
        List<Category> allCategory=this.categoryService.allCategories();
        for(Category category:allCategory) {
            category.setPicByte(decompressBytes(category.getPicByte()));
        }
        return ResponseEntity.ok(allCategory);
    }

    //delete any category
    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategory(@PathVariable Long id){
        this.categoryService.deleteCategory(id);
        return ResponseEntity.ok("category deleted successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategory(@PathVariable Long id){
        Category category=this.categoryService.viewCategory(id);
        System.out.println(category);
        category.setPicByte(decompressBytes(category.getPicByte()));
        return ResponseEntity.ok(category);
    }

    @GetMapping("/type/{categoryName}")
    public ResponseEntity<Category> getCategoryDetail(@PathVariable String categoryName){
        Category category=categoryService.getCategoryDetails(categoryName);
        return ResponseEntity.ok(category);
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

