package practiceDemo;

public class BankDemo {

	String name;
	String location;
	
	public BankDemo() {
		
	}
	
	public BankDemo(String name,String location) {
		this.name = name;
		this.location = location;
		
	}
	
	//methods
	public void checkLocation() {
		if(this.location.contains("Delhi")) {
			System.out.println("It contains delhi");
		}
		else {
			System.out.println("nope You dont have delhi");
		}
		System.out.println(this);
	}
	
	
	
	@Override
	public String toString() {
		return "BankDemo [name=" + name + ", location=" + location + "]";
	}

	public static void main(String[] args) {
		BankDemo b1= new BankDemo("icic","blore");
		b1.checkLocation();
		BankDemo b2 = new BankDemo("indian","Delhi");
		b2.checkLocation();
		
		
		
	}
	
}




