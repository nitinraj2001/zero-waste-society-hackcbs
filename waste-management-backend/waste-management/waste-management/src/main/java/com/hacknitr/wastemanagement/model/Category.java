package com.hacknitr.wastemanagement.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String categoryName;

    @OneToMany(cascade=CascadeType.ALL, mappedBy="category")
    private Set<WasteMaterial> wastes;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "picByte")
    private byte[] picByte;

    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Set<WasteMaterial> getWastes() {
        return wastes;
    }

    public void setWastes(Set<WasteMaterial> wastes) {
        this.wastes = wastes;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category() {
    }

    public Category(Long id, String categoryName, Set<WasteMaterial> wastes, byte[] picByte, String description) {
        this.id = id;
        this.categoryName = categoryName;
        this.wastes = wastes;
        this.picByte = picByte;
        this.description = description;
    }

    public Category(String categoryName, Set<WasteMaterial> wastes, byte[] picByte, String description) {
        this.categoryName = categoryName;
        this.wastes = wastes;
        this.picByte = picByte;
        this.description = description;
    }
}
