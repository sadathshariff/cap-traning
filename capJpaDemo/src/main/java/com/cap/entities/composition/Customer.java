package com.cap.entities.composition;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	
	@OneToMany(cascade = CascadeType.ALL)
	List<Vehicle> vehicles;
	
	public Customer() {
		
	}

	public Customer(String name, List<Vehicle> vehicles) {
		super();
		this.name = name;
		this.vehicles = vehicles;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Vehicle> getVehicles() {
		return vehicles;
	}

	public void setVehicles(List<Vehicle> vehicles) {
		this.vehicles = vehicles;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", vehicles=" + vehicles + "]";
	}
	
	
	

}
