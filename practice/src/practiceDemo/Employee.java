package practiceDemo;

public class Employee {
	
	int id;
	String name;
	double salary;
	
	
	private double  getsalary() {
		if(salary>0 && salary <50000) {
			return salary;
		}
		else {
			return 0.0;
		}
	}
	
	public void setsalary() {
		if(salary>0) {
			this.salary = salary;
		}
	}
	
	static final String company = "Capgemini";
	
	
	//constructors 
	
	public Employee() {
		
	}
	
	public Employee(int id,String name,double salary) {
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	
	//methods 
	public double incrementsalary() {
		this.salary += 5000;
		return salary;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + "]";
	}
	
	
	

}
