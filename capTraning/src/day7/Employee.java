package day7;

public class Employee {

	int id;
	String name;
	double salary;
	
	// has a relationship Example Employee has address
	Address address;
	
	public Employee() {
		
	}
	public void incrementSalary() {
		this.salary *= 1.5;
	}

	public Employee(int id, String name, double salary, Address address) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.address = address;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + ", address=" + address + "]";
	}
	
	
}
