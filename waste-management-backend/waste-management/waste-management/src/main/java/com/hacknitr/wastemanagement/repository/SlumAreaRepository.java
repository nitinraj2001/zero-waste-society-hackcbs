package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.SlumArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SlumAreaRepository extends JpaRepository<SlumArea,Long> {
}
