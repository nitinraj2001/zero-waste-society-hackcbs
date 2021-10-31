package com.hacknitr.wastemanagement.sevice;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.hacknitr.wastemanagement.model.User;
import com.hacknitr.wastemanagement.model.UserRole;



@Service
public interface UserService {
	
	public User createUser(User user,Set<UserRole>userRoles) throws Exception;
    
	public User findUser(String username);
	
	public void deleteUser(Long id);
}