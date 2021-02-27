package com.cap.entities.composition;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String vehicleName;
	
	public Vehicle() {
		
	}

	public Vehicle(String vehicleName) {
		super();
		this.vehicleName = vehicleName;
	}

	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", vehicleName=" + vehicleName + "]";
	}
	
	
}
