package com.hacknitr.wastemanagement.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.hacknitr.wastemanagement.exception.UserWithSameUsernameFoundException;
import com.hacknitr.wastemanagement.model.*;
import com.hacknitr.wastemanagement.sevice.EmailService;
import com.hacknitr.wastemanagement.sevice.TwilioMessageSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hacknitr.wastemanagement.sevice.UserService;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private TwilioMessageSenderService twilioService;


	@Autowired
	private UserService userService;

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private BCryptPasswordEncoder bcryptPasswordEncorder;
	
	@PostMapping("/")
	public User createNewUser(@RequestBody User theuser) throws Exception {
		try {
		User user=this.userService.findUser(theuser.getUsername());
		if(user!=null) {
			throw new UserWithSameUsernameFoundException(theuser.getUsername());
		}
		}catch(Exception e) {
			e.printStackTrace();
		}
		theuser.setProfile("default.png");
		theuser.setPassword(this.bcryptPasswordEncorder.encode(theuser.getPassword()));
		Set<UserRole> userroles=new HashSet<>();
		Role role=new Role();
		role.setRoleName("USER");
		UserRole userrole=new UserRole();
		userrole.setRole(role);
		userrole.setUser(theuser);
		userroles.add(userrole);
		return this.userService.createUser(theuser, userroles);
		
	}
	/*
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.findUser(username);
	}
	 */
	
	@DeleteMapping("/{userId}")
	public ResponseEntity deleteUser(@PathVariable("userId")Long userId) {
		this.userService.deleteUser(userId);
		return ResponseEntity.ok("user with userid "+userId+" is deleted successfully");
	}

	@GetMapping("/{userId}")
	public ResponseEntity fetchUser(@PathVariable("userId")Long userId){
		return ResponseEntity.ok(this.userService.fetchUser(userId));
	}


	@GetMapping("/")
	public List<User> getAllUsers(){
		List<User> users=new ArrayList<User>();
		for(User theuser:users){
			System.out.println(theuser.getUsername()+" "+theuser.getEmail());
		}
		return this.userService.findAllUsers();
	}

	@PostMapping("/sendSMS")
	public String sendSMSByTwillo(@RequestBody MessageModel messageRequest) {
		String sendMessageResponse = twilioService.sendMessage(messageRequest);
		return sendMessageResponse;
	}

	@PostMapping("/sendMail")
	public ResponseEntity sendMail(@RequestBody MailRequest mailRequest){

		SimpleMailMessage mailMessage=new SimpleMailMessage();

		mailMessage.setTo(mailRequest.getEmail());

		mailMessage.setSubject("Waste Pick Up Response");

		mailMessage.setText("we r got ur request for waste pickup please be there on time");

		try {
			emailService.sendEmail(mailMessage);

		}

		catch(Exception e) {
			e.printStackTrace();
		}

		return ResponseEntity.ok("mail is send successfully");

	}


}
