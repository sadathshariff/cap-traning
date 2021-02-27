package com.cap.entities.inherit;

import javax.persistence.Entity;

@Entity
public class ContractEmp extends Emp{

	double payPerDay;
	
	public ContractEmp() {
		
	}

	public ContractEmp(String name, double payPerDay) {
		super(name);
		this.payPerDay = payPerDay;
	}

	@Override
	public String toString() {
		return "ContractEmployee [payPerDay=" + payPerDay + "]";
	}
	
}
