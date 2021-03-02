package com.cap.sprint.BusApp.repos;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.sprint.BusApp.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long> {
	
	public Booking findByUsername(String username);

	public List<Booking> findAllBookingsByDate(LocalDate date);

	public List<Booking> findAllById(Long id);

	

}
