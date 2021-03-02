package com.cap.sprint.BusApp.exceptions;

public class UserNotFoundException extends RuntimeException {

	
	public UserNotFoundException() {
		
	}
	
	public UserNotFoundException(String message) {
		super(message);
	}
}
