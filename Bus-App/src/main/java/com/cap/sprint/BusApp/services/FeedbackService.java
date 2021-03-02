package com.cap.sprint.BusApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.sprint.BusApp.entities.Feedback;
import com.cap.sprint.BusApp.entities.User;
import com.cap.sprint.BusApp.exceptions.UserNotFoundException;
import com.cap.sprint.BusApp.repos.FeedbackRepository;
import com.cap.sprint.BusApp.repos.UserRepository;

@Service
public class FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Autowired
	UserRepository userRepository;
	

	// Add FeedBack 
	public Feedback addFeedback(Feedback feedback) {
		Feedback f =null;
		Optional<User> user = userRepository.findByUsername(feedback.getUsername());
		if(user.isPresent()) {
			feedback.setUser(user.get());
			f = feedbackRepository.save(feedback);
		} else {
			throw new UserNotFoundException("User not found!!!");
		}
		return f;
	}
	
	//Find all the feedBacks
	public List<Feedback> getAllFeedback(){
		List<Feedback> feedback = feedbackRepository.findAll();
		if(feedback.isEmpty()) {
			System.out.println("No feedback present");
		}
		return feedback;
	}
	
	//Find feedBack by Id
	public Feedback getFeedbackById(int id) {
		Feedback f = null;
		Optional<Feedback> feedback = feedbackRepository.findById(id);
		if(feedback.isPresent()) {
			f = feedback.get();
		}
		return f;
	}
	

	
}
