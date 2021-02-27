package practiceDemo;
 class FinDemo{
	
	public void show() {
		System.out.println("in show a");
	}
}
class Bfin extends FinDemo{
	public void Dispklay() {
		System.out.println("in b show");
	}
}

public class Final {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bfin obj = new Bfin();
		obj.show();
		obj.Dispklay();
	}

}
