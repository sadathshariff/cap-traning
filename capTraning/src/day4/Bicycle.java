package day4;

public class Bicycle {
			
	int speed;
	int gear;
	
	public Bicycle() {
		
	}
	
	public Bicycle(int speed, int gear) {
		super();
		this.speed = speed;
		this.gear = gear;
	}

	public void speedUp(int speed) {
		this.speed += speed;
	}
	
	public void speedDown(int speed) {
		this.speed -= speed;
	}
	
	public void changeGear(int gear) {
		this.gear = gear;
	}
	
	
	public static void main(String[] args) {
	

	}

}
