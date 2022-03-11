package com.hacknitr.wastemanagement.sevice;

import com.hacknitr.wastemanagement.model.MessageModel;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class TwilioMessageSenderService {

    private static final Logger logger = LoggerFactory.getLogger(TwilioMessageSenderService.class);

    @Value("${accountSID}")
    private String accountSID;

    @Value("${accountAuthToken}")
    private String accountAuthToken;

    @Value("${twilloSenderNumber}")
    private String twilloSenderNumber;

    public String sendMessage(MessageModel messageRequest) {
        try {
            Twilio.init(accountSID, accountAuthToken);
            System.out.println("welcome to message send in twilio");

            String smsText = messageRequest.getSmsText();
            String mobileNumber = messageRequest.getMobileNumber();

            System.out.println("welcome to message send in twilio"+" "+smsText+" "+mobileNumber);

            PhoneNumber recieverPhoneNumber = new PhoneNumber(mobileNumber);
            PhoneNumber senderTwilloPhoneNumber = new PhoneNumber(twilloSenderNumber);

            System.out.println("welcome to message send in twilio"+" "+recieverPhoneNumber+" "+senderTwilloPhoneNumber);

            MessageCreator creator = com.twilio.rest.api.v2010.account.Message.creator(recieverPhoneNumber, senderTwilloPhoneNumber, smsText);
            System.out.println(creator);
            Message create = creator.create();

            BigDecimal billingAmount = create.getPrice();
            Message.Status status = create.getStatus();


            logger.info("Message Send Succesfully to the number " + mobileNumber);
            return "Message Send Succesfully";
        } catch (Exception e) {
            logger.error("Exception in sendMessage Method " + e);
            return "Message Send Fail";
        }

    }
}
