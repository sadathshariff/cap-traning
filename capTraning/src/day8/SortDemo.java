package day8;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import capday3.Employee;



public class SortDemo {

	public static void main(String[] args) {
		Employee e1  = new Employee(12,"eam",4500.00);
		Employee e2 = new Employee(13,"sham",3455.00);
		Employee e3 = new Employee(14,"sor",2234.00);
		
		
		List<Employee> employees = new ArrayList<>();
		employees.add(e1); 
		employees.add(e2);
		employees.add(e3);
		
//		System.out.println(e1.compareTo(e2));
//		
//		System.out.println(employees);
//		
//		Collections.sort(employees);
//		
		System.out.println(employees);
	}
}
