package day14;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.BeforeClass;
import org.junit.Test;

public class TestEmployee {
	
	static Employee emp;
	
	@BeforeClass
	public static void setUp() {
		System.out.println("Before Every test case");
		emp = new Employee(11,"kishan",33300.00);
	}
	

	@Test
	public void test() {
		System.out.println("Test boolean Value");
		assertEquals(new String("kishan"),emp.getName());
	}

	@Test
	public void testIncrementSalary() {
		double incrementValue = 5000.0;
		Double result = emp.incrementSalary(incrementValue);
		assertNotNull(result);
		assertEquals(38300.0,result,0.00001);
	}
	
	@Test(expected = RuntimeException.class)
	public void  testIncrementSalaryWithNegativeValue() {
		double incrementValue = - 5000.0;
		double result = emp.incrementSalary(incrementValue);
	}
	
	@After
	public void tearDown() {
		System.out.println("after every test case....");
//		emp = null;
		
	}
}
