package day7;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Address address = new Address(12,"bapet","kgf");
		
		Employee emp = new Employee(11,"sadath",450000.00,address);
		
		System.out.println(emp);
		
		emp.getAddress().setHouseNumber(3227);
		
		System.out.println(emp);
		
		
		Address newadd = new Address(1423,"Blore","Karnataka");
		emp.setAddress(newadd);
		
		System.out.println(emp);
		
		emp.incrementSalary();
		
		System.out.println(emp);
		
	}

}
