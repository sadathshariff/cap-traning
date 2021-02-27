package day7;

public class TestVehicle {

	public static void main(String[] args) {

		Vehicle v = new Vehicle(200,true,"mandm");
		
		Car c = new Car(300,true,"bmw","black");
		Car c2 = new Car(122,false,"tata","green");
		Car cc =new Car(400,true,"Bmw","white");
		
		
		System.out.println(c);
		System.out.println(v);
		System.out.println(c2);
	}

}
