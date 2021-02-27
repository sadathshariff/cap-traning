package com.cap.capspringwebjpa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class EmployeeNotFoundException extends RuntimeException {

	public EmployeeNotFoundException() {
		
	}
	
	public EmployeeNotFoundException(String message) {
		super(message);
	}

}
