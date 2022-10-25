package com.hacknitr.wastemanagement.service.impl;

import com.hacknitr.wastemanagement.model.SchedulePickup;
import com.hacknitr.wastemanagement.model.User;
import com.hacknitr.wastemanagement.repository.SchedulePickupRepository;
import com.hacknitr.wastemanagement.sevice.EmailService;
import com.hacknitr.wastemanagement.sevice.SchedulePickupService;
import com.hacknitr.wastemanagement.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchedulePickupServiceImpl implements SchedulePickupService {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SchedulePickupRepository schedulePickupRepository;

    @Override
    public SchedulePickup schedulePickUp(SchedulePickup schedulePickup) {
        //collect the user details first
        User user=userService.fetchUser(schedulePickup.getUserId());
        //collect information and sending an email to the user about schedule
        SimpleMailMessage mailMessage=new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        //prepare the message to be send to the user
        String msg="Your waste is schedule at "+schedulePickup.getTime()+" on "+ schedulePickup.getDate()+" prepare with your waste";
        mailMessage.setSubject("Waste Pick Up Schedule");
        mailMessage.setText(msg);
        try {
            emailService.sendEmail(mailMessage);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return this.schedulePickupRepository.save(schedulePickup);
    }

    @Override
    public List<SchedulePickup> getScheduleDetail(Long userId) {
        return this.schedulePickupRepository.findByUserId(userId);
    }

    @Override
    public void deleteSchedule(Long id) {
        this.schedulePickupRepository.deleteById(id);
    }
}
