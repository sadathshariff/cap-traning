package com.cap.capspringwebjpa.controller;

public class UserAlreadyExistsException extends RuntimeException {

public UserAlreadyExistsException() {
		
	}
	
	public UserAlreadyExistsException(String message) {
		super(message);
	}
}
