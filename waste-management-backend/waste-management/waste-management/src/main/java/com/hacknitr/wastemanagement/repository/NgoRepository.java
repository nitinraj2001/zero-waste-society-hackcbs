package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.NGO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NgoRepository extends JpaRepository<NGO,Long> {
}
