package day7;

public class Car extends Vehicle {
	String color;
	
	public Car() {
		
	}

	
	public Car(int maxSpeed, boolean automatic, String brand,String color) {
		super(maxSpeed, automatic, brand);
		this.color= color;
	}


	@Override
	public String toString() {
		return "Car [color=" + color + ", maxSpeed=" + maxSpeed + ", automatic=" + automatic + ", brand=" + brand + "]";
	}

	
	

	
	
}
