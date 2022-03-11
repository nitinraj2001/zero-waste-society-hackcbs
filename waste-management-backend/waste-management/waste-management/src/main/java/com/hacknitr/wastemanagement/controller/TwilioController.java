package com.hacknitr.wastemanagement.controller;

import com.hacknitr.wastemanagement.model.MessageModel;
import com.hacknitr.wastemanagement.sevice.TwilioMessageSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/message")
public class TwilioController {

    @Autowired
    private TwilioMessageSenderService twilioMessageSenderService;

    @PostMapping("/sendSMS")
    public String sendSMSByTwillo(@RequestBody MessageModel messageRequest) {
        String sendMessageResponse = twilioMessageSenderService.sendMessage(messageRequest);
        return sendMessageResponse;
    }
}
