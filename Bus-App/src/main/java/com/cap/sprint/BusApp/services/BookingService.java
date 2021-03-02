package com.cap.sprint.BusApp.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.sprint.BusApp.entities.Booking;
import com.cap.sprint.BusApp.exceptions.BookingNotFoundException;
import com.cap.sprint.BusApp.exceptions.NoBookingFoundException;
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
		return booking.getBookingId();
	}
	
	public Booking getBookingDetailsById(int id) {
		Booking b = null;
		Optional<Booking> booking = bookingRepository.findById(id);
		if (booking.isPresent()) {
			b= booking.get();
		}
		return b;
	}
	
	
	public boolean deleteBoookingById(int id) {
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
	
	public boolean updateBookingByDate (Booking b) {
		boolean result = false;
		Booking b1 =null;
		Optional<Booking> booking = bookingRepository.findByBookingId(b.getBookingId());
	
		if(booking.isPresent()) {
			//b1 = booking.get();
			b1.setDate(b.getDate());
			result = true;
		} else {
			throw new BookingNotFoundException("booking doesn't exist!!!");
		}
		
		return result;
		
	}
	
	public List<Booking> findAllBookings(){
		List<Booking> list = bookingRepository.findAll();
		
		if(list.isEmpty())
			throw new NoBookingFoundException("No Bookings found !!!");
		
		return list;
	}
	
	public List<Booking> getAllBookingsById(String s) {
		List<Booking> booking = bookingRepository.findByBusNumber(s);
		if(booking.isEmpty()) {
			throw new BookingNotFoundException("Bookings not Found!!");
		}
		return booking;
	}
	
	public List<Booking> getAllBookingsByIdUsingSource(String source) {
		List<Booking> booking = bookingRepository.findBySource(source);
		if(booking.isEmpty()) {
			throw new BookingNotFoundException("Bookings not Found!!");
		}
		return booking;
		
	}
	public List<Booking> getAllBookingsByIdUsingDestination(String destination) {
		List<Booking> booking = bookingRepository.findByDestination(destination);
		if(booking.isEmpty()) {
			throw new BookingNotFoundException("Bookings not Found!!");
		}
		return booking;
		
	}
	
}
	
	


