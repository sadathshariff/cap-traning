package com.cap.entities.inherit;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class StudentRepo {


	/* Create EntityManagerFactory */
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();
	
	public Emp findStudent(int id) {
		return em.find(Emp.class, id);
	}
	
	public void addStudent(Student s) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(s);
		tx.commit();
	}
	
	public void deleteStudent(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Emp ef = em.find(Emp.class, id);
		em.remove(ef);
		tx.commit();
	}
	
	
	public void updateStudent(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Emp ef = em.find(Emp.class, id);
		ef.setName("Amit");
		tx.commit();
	}
	public static void main(String[] args) {
		StudentRepo repo = new StudentRepo();
		
		Student s =  new Student("Abbay");
		
		Student s1 = new TempAddress("Ravi",231,"prestige");
		repo.addStudent(s1);
		
		Student s2 = new PermanentAddress("ravi","kumbar","bpet",563114);
		repo.addStudent(s2);
	}
	
}
