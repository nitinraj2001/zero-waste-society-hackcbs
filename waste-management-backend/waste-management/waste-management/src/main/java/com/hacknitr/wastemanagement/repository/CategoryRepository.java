package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.Category;
import com.hacknitr.wastemanagement.model.WasteMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {

    @Query("Select tra from Category tra where tra.categoryName in (?1)")
    Category findByCategoryName(String categoryName);
}
