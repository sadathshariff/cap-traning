package day4;

public class MountainBicycle extends Bicycle {

	
	int  suspension;
	
	
	public MountainBicycle(int suspension) {
		super();
		this.suspension = suspension;
	}
	public static void main(String[] args) {
		
		
		
	}
	@Override
	public String toString() {
		return "MountainBicycle [suspension=" + suspension + ", speed=" + speed + ", gear=" + gear + "]";
	}

}
