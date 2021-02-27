package practiceDemo;

class AW{
	
	public void show() {
		System.out.println("A class");
	}
	
}

class EW extends AW{
	
	
	
	public void show() {
		System.out.println("B class");
	}
}
public class MethodOveriding {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EW obj = new EW();
		obj.show();
	}

}
