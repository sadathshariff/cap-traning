package day9;

import java.util.ArrayList;
import java.util.List;

class Vacination implements Runnable{
	
	 Employee employee;

	public Vacination(Employee employee) {
		this.employee = employee;
		
	}

	@Override
	public void run() {
		try {
			Thread.sleep(5000);
		}catch(InterruptedException e){
			e.printStackTrace();
		}
		
		System.out.println(employee + "is vacinated by :"+Thread.currentThread().getName());
	}
	
	
}


public class ThreadDemo2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


		
		
		Employee e1 = new Employee(12, "Ravi", 34343.34);
		Employee e2 = new Employee(2, "Priya", 44343.34);
		Employee e3 = new Employee(12, "Arijit", 24343.34);
		
		List<Employee> employees = new ArrayList<>();
		employees.add(e1); 
		employees.add(e2);
		employees.add(e3);
		
		for(Employee emp:employees) {
			Runnable r = new Vacination(emp);
			Thread t = new Thread(r);		
			t.start();
//			vaccinate(emp);
		
	}
	}

//	public  static void vaccinate(Employee emp) {
//		try {
//			Thread.sleep(5000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println(emp +  " Vaccinated... by: " + Thread.currentThread().getName());
//	}

	

}
