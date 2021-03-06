package com.cap.JpaSpring.repos;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cap.JpaSpring.entities.User;

@Repository
public class UserRepository {

	@PersistenceContext
	EntityManager em;
	
	public User findUser(String email) {
		TypedQuery<User> query = em.createQuery("select u from User u where u.email=:email", User.class);
		query.setParameter("email", email);
		return query.getSingleResult();
	}
	
	@Transactional
	public void addUser(User user) {
		em.persist(user);
	}

	@Transactional
	public void updateUserPassword(int id, String newPassword) {
		User user = em.find(User.class, id);
//		em.merge(user);
		user.setPassword(newPassword);
	
		
	}
	 
}
	 

