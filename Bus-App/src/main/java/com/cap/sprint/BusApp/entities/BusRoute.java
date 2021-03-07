package com.cap.sprint.BusApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BusRoute {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String routeName;
	String source;
	String destination;
	
	public BusRoute() {
		
	}

	public BusRoute(String routeName, String source, String destination) {
		super();
		this.routeName = routeName;
		this.source = source;
		this.destination = destination;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRouteName() {
		return routeName;
	}

	public void setRouteName(String routeName) {
		this.routeName = routeName;
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
	
	

}
