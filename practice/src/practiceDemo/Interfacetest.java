package practiceDemo;

class mySample implements Child{
	
	
	@Override
	public void meth1() {
		System.out.println("method 1");
		
	}

	@Override
	public void meth2() {
		// TODO Auto-generated method stub
		System.out.println("method 2");
		
	}

	@Override
	public void meth3() {
		// TODO Auto-generated method stub
		System.out.println("method 3");
	}

	@Override
	public void meth4() {
		// TODO Auto-generated method stub
		System.out.println("method 4");
	}

	
}


public class Interfacetest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		mySample obj = new mySample();
		obj.meth1();
		obj.meth2();
		obj.meth3();
		obj.meth4();
		obj.cal(2, 5);
		
	}

}
