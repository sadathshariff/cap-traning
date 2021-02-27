package practiceDemo;

public class EmployeeTest {

	public static void main(String[] args) {
			//creating Objects
		
		Employee emp = new Employee();
//		emp.id =12;
//		emp.name = "sala";
		
		emp.incrementsalary();
		System.out.println(emp.salary);
		
		
		Employee emp2 = new Employee(11,"Priya",43500.00);
		Employee emp3 =  new Employee(12,"raj",33524.00);
		
		System.out.println(emp2.name);
		emp2.incrementsalary();
		System.out.println(emp2);
		
		System.out.println(emp.company);
		
//		
	}

}
