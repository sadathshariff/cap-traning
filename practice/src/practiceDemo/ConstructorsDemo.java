package practiceDemo;

//
//class Calc{
//	int num1;
//	int num2;
//	int result;
//	
//	
//	public Calc() {
//		num1 = 5;
//	}
	
//}
//
//class Casio{
//	
//	int num1;
//	int num2;
//	
//	public Casio() {
//		
//	}
//	
//	
//	
//	public void add(int i,int j) {
//		System.out.println(i+j);
//	}
//	public void add(int i,int j,int k) {
//		System.out.println(i+j+k);
//	}
//	
//
//}

class Outer{
	int a;
	public void display() {
		System.out.println(a);
	}
	
	class Inner{
		public void show() {
			System.out.println("Inner class !!");
		}
	}
}

public class ConstructorsDemo {

	public static void main(String[] args) {
		
//		Calc obj = new Calc();
//		System.out.println(obj.num1);
//		
//		Casio obj = new Casio();
//		obj.add(2,6);
//		
//		obj.add(2, 6,6);
//		
		Outer obj = new Outer();
		obj.display();
		
		Outer.Inner obj2 = obj.new Inner();
		
		obj2.show();
//		
//		
	}
}

