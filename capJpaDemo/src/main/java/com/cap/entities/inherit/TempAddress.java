package com.cap.entities.inherit;

import javax.persistence.Entity;

@Entity
public class TempAddress extends Student {

	int doorNo;
	String appartmentName;
	
	

	public TempAddress(String name ,int doorNo,String appartmentName) {
		super(name);
		this.doorNo = doorNo;
		this.appartmentName = appartmentName;
			
}



	@Override
	public String toString() {
		return "TempAddress [doorNo=" + doorNo + ", appartmentName=" + appartmentName + "]";
	}
	
	
	
}
