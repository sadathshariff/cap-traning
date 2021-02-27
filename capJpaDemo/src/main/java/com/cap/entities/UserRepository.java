package com.cap.entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class UserRepository {
	

	/* Create EntityManagerFactory */
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();

	public void addUser(User1 e) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(e);
		tx.commit();
	}
	public User1 findUserByEmail(String email){
		TypedQuery<User1> query = em.createQuery("SELECT u FROM User u where u.email = :x AND u.password = :y", User1.class);
		query.setParameter("x",email);
		query.setParameter("y","test");
		User1 user = query.getSingleResult();
		return user;
	}
	
	public User1 findUser(int id) {
		// starting a transactions
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		User1 user = em.find(User1.class, id);
		user.setPassword("test");
		
		// commit transaction
		tx.commit();
		em.close();
		// Detached state
		
		return user;
	}
	
	public User1 deleteUser(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		User1 user = em.find(User1.class, id);
		em.remove(user);
		tx.commit();
		return user;
		
	}
	
	public static void main(String[] args) {
		UserRepository repo = new UserRepository();
		
		User1 user = new User1("test2@test.com", "test","test",true);
		repo.addUser(user);
	}
}
