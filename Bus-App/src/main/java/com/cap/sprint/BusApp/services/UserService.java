package com.cap.sprint.BusApp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.sprint.BusApp.entities.User;
import com.cap.sprint.BusApp.exceptions.UserAlreadyExistsException;
import com.cap.sprint.BusApp.exceptions.UserNotFoundException;
import com.cap.sprint.BusApp.repos.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public void addUser(User user) {
		Optional<User> u = userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			throw new UserAlreadyExistsException("Username " + user.getUsername() + "already exists!!");
		}
		else {
			userRepository.save(user);
		}
	}
	
	public void deleteUser(String username) {
		User newUser = null;
		Optional<User> u = userRepository.findByUsername(username);
		if(u.isPresent()) {
			newUser = u.get();
			userRepository.delete(newUser);
		}
		else {
			throw new UserNotFoundException(" User with Username " +username + "does not exist");
		}
	}
	
	public void updateUserPassword(String username,String password) {
		User newUser = null;
		Optional<User> u =userRepository.findByUsername(username);
		if(u.isPresent()) {
			newUser = u.get();
			newUser.setPassword(password);	
		}
		else {
			throw new UserNotFoundException("User with username "+username+" does not exist");
		}
	}

}
