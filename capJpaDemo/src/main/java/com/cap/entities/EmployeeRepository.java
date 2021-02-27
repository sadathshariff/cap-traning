package com.cap.entities;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

public class EmployeeRepository {
	
	
	/* Create EntityManagerFactory */
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();
	

	public Employee findEmployee(int id) {
		return em.find(Employee.class, id);
	}
	
	
	//CRUD = create, read/find, update , delete;
	
	//named queries = hql;
	//creating the employees
	public void addEmployee(Employee e) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(e);
		tx.commit();
	}
	
	// updating the employee table for this we need getters and setters no such method for update
	public void updateEmployee(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Employee ef = em.find(Employee.class, id);
		ef.setName("Amit");
		tx.commit();
	}
	
	//Delete the employee using the id
	public void deleteEmployee(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Employee ef = em.find(Employee.class, id);
		em.remove(ef);
		tx.commit();
	}
	
	// named query using HQL for matching the employee email
//	public List<Employee> findAllEmployees(){
//		TypedQuery<Employee> query = em.createQuery("select e from Employee e where e.email = :x", Employee.class);
//		query.setParameter("x", "tej@gmail.com");
//		List<Employee> employees = query.getResultList();
//		return employees;
//	}
	
	public List<Employee> findMaxSalary(){
		Query query = em.createQuery("select max(salary) from Employee e ");
				List<Employee> employees = query.getResultList();
				return employees;
	}
	
	
	public static void main(String[] args) {
		EmployeeRepository repo = new EmployeeRepository();
//		Employee e = new Employee("shah", 65334.33,"shah@gmail.com","shadow");
//		repo.addEmployee(e);
		
		
//		repo.updateEmployee(4);
		
		List<Employee> employees = repo.findMaxSalary();
		System.out.println(employees);
		
//		
	}
	
	
	
}
