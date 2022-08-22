package com.hacknitr.wastemanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SchedulePickup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String wasteDetails;

    private Long userId;

    private String date;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    private String location;

    private String time;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWasteDetails() {
        return wasteDetails;
    }

    public void setWasteDetails(String wasteDetails) {
        this.wasteDetails = wasteDetails;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public SchedulePickup(String wasteDetails, Long userId, String date, String time,String location) {
        this.wasteDetails = wasteDetails;
        this.userId = userId;
        this.date = date;
        this.time = time;
        this.location=location;
    }
}
