package com.cap.sprint.BusApp.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cap.sprint.BusApp.entities.Booking;
import com.cap.sprint.BusApp.services.BookingService;

@RestController
@RequestMapping(path = "/api/v1/bookings")

public class BoookingController {

	@Autowired
	BookingService bookingService;
	
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public long addBooking(@RequestBody Booking booking) {
		return bookingService.addBooking(booking);
	}
	
	@GetMapping("/{id}")
	public Booking getBookingDetailsById(@PathVariable("id") int id) {
		return bookingService.getBookingDetailsById(id);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteBookingById(@PathVariable("id") int id) {
		return bookingService.deleteBoookingById(id);
	}
	
	@GetMapping("/date/{date}")
	public List<Booking> getAllBookingsByDate(@PathVariable("date") String date) {
		LocalDate d= LocalDate.parse(date);
		return bookingService.getAllBookingsByDate(d);
	}
	
	@PutMapping("/update/{bookingId}")
	@Transactional
	public boolean updateBookingByDate (@PathVariable("bookingId") long bookingId, @RequestBody Booking b) {
		return bookingService.updateBookingByDate(b);
	}
	
	@GetMapping("/")
	@ResponseStatus(code = HttpStatus.OK)
	public List<Booking> findAllBookings(){
		return bookingService.findAllBookings();
	}
	
	@GetMapping("/busNumber/{busNumber}")
	public List<Booking> getAllBookingsById(@PathVariable("busNumber") String busNumber) {
		return bookingService.getAllBookingsById(busNumber);
	}
	
	@GetMapping("/source/{source}")
	public List<Booking> getAllBookingsByIdUsingSource(@PathVariable("source") String source) {
		return bookingService.getAllBookingsByIdUsingSource(source);
	}
	
	@GetMapping("/destination/{destination}")
	public List<Booking> getAllBookingsByIdUsingDestination(@PathVariable("destination") String destination) {
		return bookingService.getAllBookingsByIdUsingDestination(destination);
	}
}
