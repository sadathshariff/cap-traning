package com.cap.JpaSpring.repos;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cap.JpaSpring.entities.Employee;

@Repository
public class EmployeeRepository {

	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public void addEmployee(Employee e)throws Exception{
		em.persist(e);
		if(e.getName().equals("")) {
			// only unchecked exception cause a rollback, otherwise successful method completion is considered as commit
						throw new RuntimeException("Name is empty");
		}
	}
	@Transactional
	public Employee findEmployee(int id) {
		return em.find(Employee.class, id);
	}
}
