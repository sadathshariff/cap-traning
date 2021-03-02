package com.cap.sprint.BusApp.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.sprint.BusApp.entities.Booking;
import com.cap.sprint.BusApp.exceptions.BookingNotFoundException;
import com.cap.sprint.BusApp.repos.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository bookingRepository;
	
	public long addBooking(Booking booking) {
		Booking b1 = bookingRepository.findByUsername(booking.getUsername());
			if(b1 == null) {
				bookingRepository.save(booking);
			}
			else {
				System.out.println("Username already exists!!!");
		}
		return booking.getId();
	}
	
	public Booking getBookingDetailsById(long id) {
		Booking b = null;
		Optional<Booking> booking = bookingRepository.findById(id);
		if (booking.isPresent()) {
			b= booking.get();
		}
		return b;
	}
	
	
	public boolean deleteBoookingById(long id) {
		Booking b = null;
		boolean result = false;
		Optional<Booking> booking = bookingRepository.findById(id);
		if(booking.isPresent()) {
			b= booking.get();
			bookingRepository.delete(b);
			result = true;
		}
		else {
			throw new BookingNotFoundException("Booking Does not exist!!");
		}
		return result;
		
	}
	
	public List<Booking> getAllBookingsByDate(LocalDate date) {
		return bookingRepository.findAllBookingsByDate(date);
	}
	
	public List<Booking> getAllBookingsById(long id) {
		return bookingRepository.findAllById(id);
	}
	
	public boolean updateBookingDate(long id) {
		boolean result = false;
		Optional<Booking> booking = bookingRepository.findById(booking.getId());
		booking.setDate(booking.getDate());
		
		return result;
		
	}
	

	
}
	
	


