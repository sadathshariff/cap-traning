package com.cap.sprint.BusApp.entities;

import javax.persistence.Entity;

//@Entity
public class User {

	int id;
	String userName;
	String password;
	
	
	public User() {
		super();
	}


	public User(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	
	
}
