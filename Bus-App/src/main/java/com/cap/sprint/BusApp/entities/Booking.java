package com.cap.sprint.BusApp.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	long id;
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

	public Booking(String username, String busNumber, String source, String destination, int numberOfSeats,
			int amountPaid, LocalDate date, LocalTime journeyStartTime, LocalTime journeyEndTime) {
		super();
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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
		return "Booking [id=" + id + ", username=" + username + ", busNumber=" + busNumber + ", source=" + source
				+ ", destination=" + destination + ", numberOfSeats=" + numberOfSeats + ", amountPaid=" + amountPaid
				+ ", date=" + date + ", journeyStartTime=" + journeyStartTime + ", journeyEndTime=" + journeyEndTime
				+ "]";
	}
	
	
	
	

}
