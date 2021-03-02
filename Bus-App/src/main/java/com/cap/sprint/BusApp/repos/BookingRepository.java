package com.cap.sprint.BusApp.repos;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.sprint.BusApp.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer> {
	
	public Booking findByUsername(String username);

	public List<Booking> findAllBookingsByDate(LocalDate date);

	public List<Booking> findAllById(Long id);

	public Optional<Booking> findByBookingId(long bookingId);

	public List<Booking> findAllBookingsById(String busNumber);

	public List<Booking> findByBusNumber(String s);

	public List<Booking> findBySource(String source);

	public List<Booking> findByDestination(String destination);

	

}
