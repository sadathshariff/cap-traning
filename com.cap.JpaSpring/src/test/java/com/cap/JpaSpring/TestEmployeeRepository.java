package com.cap.JpaSpring;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cap.JpaSpring.entities.Employee;
import com.cap.JpaSpring.repos.EmployeeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestEmployeeRepository {

	@Autowired
	EmployeeRepository employeeRepository;
	
	//@Test
	public void testEmployeeAdd() {
		Employee e = new Employee("vikas",2222.32);
		try {
			employeeRepository.addEmployee(e);
		}
		catch(Exception e1) {
			e1.printStackTrace();
		}
		
	}
	@Test
	public void testEmployeeFind() {
		
		Employee emp = employeeRepository.findEmployee(3);
		System.out.println(emp);
	}

}
