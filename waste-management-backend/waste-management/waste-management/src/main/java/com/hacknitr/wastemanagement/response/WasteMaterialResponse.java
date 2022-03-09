package com.hacknitr.wastemanagement.response;

import javax.persistence.Column;

public class WasteMaterialResponse {

    private Long id;

    private String name;

    private String description;

    private Long userId;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "picByte")
    private byte[] picByte;

    private String CategoryName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }

    public WasteMaterialResponse(String name, String description, Long userId, byte[] picByte, String categoryName) {
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.picByte = picByte;
        CategoryName = categoryName;
    }

    public WasteMaterialResponse() {
    }
}
