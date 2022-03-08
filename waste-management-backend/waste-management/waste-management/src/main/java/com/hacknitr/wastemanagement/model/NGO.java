package com.hacknitr.wastemanagement.model;

import javax.persistence.*;

@Entity
public class NGO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ngoId;

    private String name;

    private String description;

    private String location;

    private String emailId;

    private String ngoType;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "picByte")
    private byte[] picByte;

    public Long getNgoId() {
        return ngoId;
    }

    public void setNgoId(Long ngoId) {
        this.ngoId = ngoId;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getNgoType() {
        return ngoType;
    }

    public void setNgoType(String ngoType) {
        this.ngoType = ngoType;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public NGO() {
    }

    public NGO(String name, String description, String location, String emailId, String ngoType, byte[] picByte) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.emailId = emailId;
        this.ngoType = ngoType;
        this.picByte = picByte;
    }
}
