package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.Muncipality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuncipalityRepository extends JpaRepository<Muncipality,Long> {
}
