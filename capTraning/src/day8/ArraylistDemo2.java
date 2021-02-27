package day8;

import java.util.ArrayList;
import java.util.List;

import capday3.Employee;

public class ArraylistDemo2 {

	public static void main(String[] args) {
		
		Employee e1 =  new Employee(12,"ravi",45000.00);
		Employee e2  = new Employee(13,"sam",23300.00);
		Employee e3 = new Employee(14,"dom",34974.00);
		
		List<Employee>employees = new ArrayList<>();
		employees.add(e1);
		employees.add(e2);
		employees.add(e3);
		
		
		System.out.println(employees);
		
		employees.add(1, new Employee(23,"asada",50000.00));
		
		System.out.println(employees);
		
		
		
	}
}
