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

}
