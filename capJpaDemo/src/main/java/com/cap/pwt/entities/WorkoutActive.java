package com.cap.pwt.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class WorkoutActive {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String title;
	int caloriesBurntPerMinute;
	LocalDateTime startTime;
	LocalDateTime endTime;
	
	@ManyToOne(cascade = CascadeType.ALL)
	User user;

	public WorkoutActive() {
		
	}
	
	public WorkoutActive(String title, int caloriesBurntPerMinute, LocalDateTime startTime, LocalDateTime endTime,
			User user) {
		super();
		this.title = title;
		this.caloriesBurntPerMinute = caloriesBurntPerMinute;
		this.startTime = startTime;
		this.endTime = endTime;
		this.user = user;
	}

	public LocalDateTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalDateTime startTime) {
		this.startTime = startTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return "WorkoutActive [id=" + id + ", title=" + title + ", caloriesBurntPerMinute=" + caloriesBurntPerMinute
				+ ", startTime=" + startTime + ", endTime=" + endTime + ", user=" + user + "]";
	}
	
	
}
