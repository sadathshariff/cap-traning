package com.cap.sprint.BusApp.test;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cap.sprint.BusApp.entities.Booking;
import com.cap.sprint.BusApp.entities.User;
import com.cap.sprint.BusApp.services.BookingService;

@SpringBootTest
class TestBookingService {
	
	@Autowired
	BookingService bookingService;
	
//	@Test
	void testAddBooking() {
		Booking b = new Booking(123,"Ramesh","XYZ123","C","D",3,300,null,null,null,null,null,null);
		bookingService.addBooking(b);
	}

//	@Test
	void testUpdateBookingDate() {
		bookingService.updateBookingDate(45);
	}

//	@Test
	void testDeleteBooking() {
		bookingService.deleteBooking(45);
	}

//	@Test
	void testGetBookingDetailsById() {
		bookingService.getBookingDetailsById(45);
	}

//	@Test
	void testGetAllBookingByDate() {
		LocalDate date = LocalDate.parse("2021-03-02");
		bookingService.getAllBookingByDate(date);
	}

//	@Test
	void testGetAllBookingByBusRoute() {
		bookingService.getAllBookingByBusRoute("A to B");
	}

//	@Test
	void testGetFeedbackByBusRoute() {
		bookingService.getFeedbackByBusRoute("A to B");
	}

//	@Test
	void testFindAllBookings() {
		bookingService.findAllBookings();
	}

//	@Test
	void testAddFeedbackUserLong() {
		User user = new User();
		user.setUsername("Ravi");
		user.setPassword("Ravi123");
		bookingService.addFeedback(user, 45);
	}

//	@Test
	void testAddFeedbackStringLongString() {
		bookingService.addFeedback("Ravi", 45, "Good ride");
	}

}
