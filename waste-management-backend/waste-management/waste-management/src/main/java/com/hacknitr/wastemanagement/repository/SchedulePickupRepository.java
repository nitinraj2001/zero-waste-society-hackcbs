package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.SchedulePickup;
import com.hacknitr.wastemanagement.model.WasteMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchedulePickupRepository extends JpaRepository<SchedulePickup,Long> {

    @Query("Select tra from SchedulePickup tra where tra.userId in (?1)")
    List<SchedulePickup> findByUserId(Long id);
}
