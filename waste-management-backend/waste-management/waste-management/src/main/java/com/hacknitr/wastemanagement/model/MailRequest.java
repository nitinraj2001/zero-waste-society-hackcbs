package com.hacknitr.wastemanagement.model;

import org.springframework.stereotype.Component;

@Component
public class MailRequest {

    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public MailRequest(String email) {
        this.email = email;
    }

    public MailRequest() {
    }
}
