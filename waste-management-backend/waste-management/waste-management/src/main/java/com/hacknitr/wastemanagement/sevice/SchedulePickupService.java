package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.SchedulePickup;
import org.springframework.stereotype.Service;

@Service
public interface SchedulePickupService {

    public SchedulePickup schedulePickUp(SchedulePickup schedulePickup);

    public SchedulePickup getScheduleDetail(Long userId);
}
