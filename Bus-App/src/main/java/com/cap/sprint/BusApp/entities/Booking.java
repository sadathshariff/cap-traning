package com.cap.sprint.BusApp.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	long bookingId;
	String username;
	String busNumber;
	String source;
	String destination;
	int numberOfSeats;
	int amountPaid;
	LocalDate date;
	LocalTime journeyStartTime;
	LocalTime journeyEndTime;
	
	public Booking() {
		super();
	}
	
	@ManyToOne(cascade = CascadeType.ALL)
	BusRoute busroute;
	
	@ManyToOne(cascade = CascadeType.ALL)
	User user;
	
	

	public Booking(long bookingId,String username, String busNumber, String source, String destination, int numberOfSeats,
			int amountPaid, LocalDate date, LocalTime journeyStartTime, LocalTime journeyEndTime) {
		super();
		this.bookingId = bookingId;
		this.username = username;
		this.busNumber = busNumber;
		this.source = source;
		this.destination = destination;
		this.numberOfSeats = numberOfSeats;
		this.amountPaid = amountPaid;
		this.date = date;
		this.journeyStartTime = journeyStartTime;
		this.journeyEndTime = journeyEndTime;
	}

	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public String getUsername() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
	}

	public String getBusNumber() {
		return busNumber;
	}

	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public int getAmountPaid() {
		return amountPaid;
	}

	public void setAmountPaid(int amountPaid) {
		this.amountPaid = amountPaid;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getJourneyStartTime() {
		return journeyStartTime;
	}

	public void setJourneyStartTime(LocalTime journeyStartTime) {
		this.journeyStartTime = journeyStartTime;
	}

	public LocalTime getJourneyEndTime() {
		return journeyEndTime;
	}

	public void setJourneyEndTime(LocalTime journeyEndTime) {
		this.journeyEndTime = journeyEndTime;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", username=" + username + ", busNumber=" + busNumber + ", source=" + source
				+ ", destination=" + destination + ", numberOfSeats=" + numberOfSeats + ", amountPaid=" + amountPaid
				+ ", date=" + date + ", journeyStartTime=" + journeyStartTime + ", journeyEndTime=" + journeyEndTime
				+ "]";
	}

	
	
	
	
	

}
