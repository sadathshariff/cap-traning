package com.cap.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="USER")
public class User1 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String email;
	String password;
	@Transient
	String confirmPassword;
	boolean active;
	
	public User1(){
		
	}
	public User1(String email, String password, String confirmPassword, boolean active) {
		super();
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.active = active;
	}
	
	
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", confirmPassword=" + confirmPassword + "]";
	}
	
	
	
	

}
