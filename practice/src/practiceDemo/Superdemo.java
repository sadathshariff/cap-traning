package practiceDemo;

class A{
	public A() {
		System.out.println("A class");
	}
	public A(int i) {
		System.out.println("inside a class");
	}
}

class B extends A {
	public B(){
		super(5);
		System.out.println("B class");
	}
	
	public B(int i) {
		
		System.out.println("inside b class");
	}
}
public class Superdemo {
	

	public static void main(String[] args) {
//		A obj = new A();
		B obj2 =  new B(5);
		

	}

}
