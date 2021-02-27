package com.cap.entities.inherit;

import javax.persistence.Entity;

@Entity
public class PermanentAddress extends Student {

	String area;
	String city;
	int pincode;
	
	

	public PermanentAddress(String name,String area, String city, int pincode) {
		super(name);
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}



	@Override
	public String toString() {
		return "PermanentAddress [area=" + area + ", city=" + city + ", pincode=" + pincode + "]";
	}
	
	
}
