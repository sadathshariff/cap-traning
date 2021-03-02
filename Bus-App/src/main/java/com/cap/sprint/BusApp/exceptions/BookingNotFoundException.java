package com.cap.sprint.BusApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class BookingNotFoundException extends RuntimeException {

	public BookingNotFoundException() {
		
	}
	
	public BookingNotFoundException(String message) {
		super(message);
	}

	
}
