package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.SchedulePickup;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SchedulePickupService {

    public SchedulePickup schedulePickUp(SchedulePickup schedulePickup);

    public List<SchedulePickup> getScheduleDetail(Long userId);

    public void deleteSchedule(Long id);
}
