package com.hacknitr.wastemanagement.model;

import javax.persistence.*;

@Entity
@Table(name="waste")
public class WasteMaterial {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "picByte")
    private byte[] picByte;

    @OneToOne
    @JoinColumn(name="category_id", nullable=false)
    private Category category;

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

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public WasteMaterial() {
    }

    public WasteMaterial(Long id, String name, String description, byte[] picByte, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.picByte = picByte;
        this.category = category;
    }

    public WasteMaterial(String name, String description, byte[] picByte, Category category) {
        this.name = name;
        this.description = description;
        this.picByte = picByte;
        this.category = category;
    }
}
