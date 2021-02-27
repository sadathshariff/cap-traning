package day9;

public class Employee {

	int id;
	String name;
	double salary;
	
	// has a relationship Example Employee has address
	
	
	public Employee() {
		
	}
	public void incrementSalary() {
		this.salary *= 1.5;
	}

	public Employee(int id, String name, double salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
		
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + "+ ";
	}
	
	
}
