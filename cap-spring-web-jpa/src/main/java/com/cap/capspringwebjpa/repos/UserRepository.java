package com.cap.capspringwebjpa.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.capspringwebjpa.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	public User findByEmail(String email);
	
	public User findByEmailAndPassword(String email, String password);

}
