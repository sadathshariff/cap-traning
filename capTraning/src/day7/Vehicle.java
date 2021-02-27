package day7;

public  class Vehicle {
	int maxSpeed;
	boolean automatic;
	String brand;
	
	
	public Vehicle() {
		
	}


	public Vehicle(int maxSpeed, boolean automatic,String brand) {
		super();
		this.maxSpeed = maxSpeed;
		this.automatic = automatic;
		this.brand = brand;
	}


	@Override
	public String toString() {
		return "Vehicle [maxSpeed=" + maxSpeed + ", automatic=" + automatic + ", brand=" + brand + "]";
	}
	
	
}
