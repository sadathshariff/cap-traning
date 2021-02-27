package com.cap.capspringwebjpa.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cap.capspringwebjpa.entities.Employee;
import com.cap.capspringwebjpa.repos.EmployeeRepository;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeRepository employeeRepository;
	
	
	//@PostMapping("/employees")
	@RequestMapping(value="/employees" , method = RequestMethod.POST)
	public ResponseEntity<Void> addEmployee(@RequestBody Employee e) {
		ResponseEntity<Void>  re;
		
		Employee emp = employeeRepository.findByName(e.getName());
		if(emp == null) {
			employeeRepository.save(e);
			 re = new ResponseEntity<>(HttpStatus.CREATED);
		}
		else {
			//re = new ResponseEntity<>(HttpStatus.CONFLICT);
			throw new EmployeeNotFoundException("Employee not foudn with id : " +  e.getId());
		}
		
		return re;
	}
	
	@GetMapping("/employees")
	public List<Employee> findAllEmployees(){
		System.out.println("Method mapped to Http....");
		return employeeRepository.findAll();
	}
	

	@RequestMapping(value="/employees" , method = RequestMethod.PUT)
	@Transactional
	public ResponseEntity<Void> updateEmployee(@RequestBody Employee e) {
		ResponseEntity<Void>  re;
		
		Employee emp = employeeRepository.findByName(e.getName());
		emp.setSalary(e.getSalary());
		re = new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return re;
	}
	
	
	
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> findEmployee(@PathVariable("id") int id) {
		
		ResponseEntity<Employee> re = null;
		
		Optional<Employee> employee = employeeRepository.findById(id);
		Employee e = null;
		if(employee.isPresent()) {
			e = employee.get();
		re  = new ResponseEntity<>(e,HttpStatus.OK);
			
		}
		else {
			re = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	@GetMapping("/employee/{name}")
	public Employee findByName(@PathVariable("name") String name) {
		Employee e = employeeRepository.findByName(name);
		return e;
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable("id")int id) {
		Optional<Employee> employee = employeeRepository.findById(id);
		Employee e = null;
		if(employee.isPresent()) {
			e = employee.get();
			employeeRepository.delete(e);
		}
	}
}

