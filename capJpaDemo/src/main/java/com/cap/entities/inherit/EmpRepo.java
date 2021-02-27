package com.cap.entities.inherit;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class EmpRepo {

	/* Create EntityManagerFactory */
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();
	
	public Emp findEmployee(int id) {
		return em.find(Emp.class, id);
	}
	
	public void addEmployee(Emp e) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(e);
		tx.commit();
	}
	
	public void deleteEmployee(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Emp ef = em.find(Emp.class, id);
		em.remove(ef);
		tx.commit();
	}
	
	
	public void updateEmployee(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Emp ef = em.find(Emp.class, id);
		ef.setName("Amit");
		tx.commit();
	}
	
	public static void main(String[] args) {
		EmpRepo repo = new EmpRepo();
		
		Emp e = new Emp("Hello");
		

		Emp e2 = new RegularEmp("Divya", 34323.34, 3);
		repo.addEmployee(e2);
		
		Emp e1 = new ContractEmp("Ram", 1000.00);
		repo.addEmployee(e1);
	}
}
