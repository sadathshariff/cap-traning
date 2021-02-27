package jdbc;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import day12.Employee;

public class TestEmployeeRepository {
	
	static EmployeeRepository repo;
	
	
	@BeforeClass
	public static void setup() {
		repo = new EmployeeRepository();
	}

	@Test
	public void testFindAllEmployees() {
		List<Employee> employees = repo.findAllEmployees();
		System.out.println(employees);
		assertSame(3,employees.size());
		
	}
	
	public void testAddEmployee() {
		Employee emp = new Employee(23, "Rahul");
		int count = repo.addEmployee(emp);
		assertSame(1, count);
	}

}
