package com.cap.capspringwebjpa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cap.capspringwebjpa.entities.User;
import com.cap.capspringwebjpa.repos.UserRepository;

@RestController
public class UserController {

	@Autowired 
	UserRepository userRepository;
	
	
	//@PostMapping("/users")
	@RequestMapping(value="/users",method = RequestMethod.POST)
	public  ResponseEntity<Void> addUser(@RequestBody User u) {
		ResponseEntity<Void> re;
		User user = userRepository.findByEmail(u.getEmail());
		if(user==null) {
			userRepository.save(u);
			re = new ResponseEntity<>(HttpStatus.CREATED);
		}
		else {

			re = new ResponseEntity<>(HttpStatus.CONFLICT);
			//throw new UserAlreadyExistsException("User with email exists" + u.getEmail());
		}
		return re;
	}
	
	@GetMapping("/users")
	public List<User> findAllUsers(){
		System.out.println("Method mapped to Http....");
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{email}")
	public User findUserByEmail(@PathVariable String email){
		return userRepository.findByEmail(email);
	}
	
	@GetMapping("/users/{email};{password}")
	public User findUserByEmailAndPassword(@PathVariable String email , String password){
		return userRepository.findByEmailAndPassword(email,password);
	}
	
	@DeleteMapping("/users")
	public void deleteUser(@PathVariable("id")int id) {
		Optional<User> user = userRepository.findById(id);
		User u = null;
		if(user.isPresent()) {
			u = user.get();
			userRepository.delete(u);
		}
	}

	
}
