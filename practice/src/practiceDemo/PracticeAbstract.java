package practiceDemo;
//
//abstract class pen{
//	
//	abstract void write();
//	abstract void refill();
//}

class Monkey{
	void jump() {
		System.out.println("jumping");
	}
	void bite() {
		System.out.println("Biting");
	}
}
interface BasicAnimal{
	void eat();
	void sleep();
	
}

class Human extends Monkey implements BasicAnimal{
	void speak() {
		System.out.println("hello im human");
	}

	@Override
	public void eat() {
		System.out.println("eating");
		
	}

	@Override
	public void sleep() {
		System.out.println("sleepinh zzzz....");
		
	}
}
//class Fountainpen extends pen{
//
//	@Override
//	void write() {
//		System.out.println("writing");
//		
//	}
//
//	@Override
//	void refill() {
//		// TODO Auto-generated method stub
//		System.out.println("refilling");
//	}
//	
//	void changeNib() {
//		System.out.println("changing nib");
//	}
//	
//}

public class PracticeAbstract {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		
//		Fountainpen  pen1 = new Fountainpen();
//		pen1.refill();
//		pen1.write();
//		pen1.changeNib();
		
		 Monkey m = new Monkey();
		 m.bite();
		 m.jump();
		 
		 System.out.println("---------------------");
		 
		 Human h = new Human();
		 h.bite();
		 h.bite();
		 h.speak();
		 h.eat();
		 h.sleep();
		 

	}

}

