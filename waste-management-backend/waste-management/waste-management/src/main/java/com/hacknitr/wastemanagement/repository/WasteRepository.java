package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.WasteMaterial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WasteRepository extends JpaRepository<WasteMaterial,Long> {

    @Query("Select tra from WasteMaterial tra where tra.userId in (?1)")
    List<WasteMaterial> findByUserId(Long userId);

    @Query("Select tra from WasteMaterial tra where tra.userId in (?1)")
    WasteMaterial findWasteByUserId(Long id);
}
