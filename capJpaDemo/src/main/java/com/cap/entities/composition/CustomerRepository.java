package com.cap.entities.composition;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;



public class CustomerRepository {
	
EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();
	
	public Customer findEmployee(int id) {
		return em.find(Customer.class, id);
	}
	
	public void addUser(Customer u) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(u);
		tx.commit();
	}
	public void deleteUser(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Customer ef = em.find(Customer.class, id);
		em.remove(ef);
		tx.commit();
	}
	public void deleteUserByName(String name) {	
		TypedQuery<Customer> query = em.createQuery("select c from customer c where c.name:name", Customer.class);
		query.setParameter("name",name);
		em.remove(query);
		
	}
	public static void main(String[] args) {
		CustomerRepository repo = new CustomerRepository();
		Vehicle Bike1 = new Vehicle("Bullet");
		Vehicle car1 = new Vehicle("Tesla");
		
		Vehicle Bike2 = new Vehicle("KTM");
		Vehicle car2 = new Vehicle("i20");
		
		List<Vehicle> vehicles1 = new ArrayList<>();
		vehicles1.add(Bike1);
		vehicles1.add(car1);
		
		List<Vehicle> vehicles2 = new ArrayList<>();
		vehicles2.add(Bike2);
		vehicles2.add(car2);
		
		
		Customer u = new Customer("Ravi",vehicles1);
		Customer u1 = new Customer("Priya",vehicles2);
//		repo.addUser(u);
//		repo.addUser(u1);
		repo.deleteUserByName("Ravi");
		
	}

}
