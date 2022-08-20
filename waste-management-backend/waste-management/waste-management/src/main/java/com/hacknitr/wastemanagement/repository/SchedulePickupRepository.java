package com.hacknitr.wastemanagement.repository;

import com.hacknitr.wastemanagement.model.SchedulePickup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchedulePickupRepository extends JpaRepository<SchedulePickup,Long> {
}
