package practiceDemo;


class Calculator{   // Super parent class
	
	public int add(int i,int j) {
		return i+j;
	}
	
}

class AdvanceCalc extends Calculator{  // sub child class
	public int sub(int i, int j) {
		return i-j;
	}
}
// MULTI LEVEL INHERITANCE 
class Veryadv extends AdvanceCalc{
	public int mul(int i,int j) {
		return i*j;
	}
}

// JAVA DDOESN'T SUPPORT MULTIPLE INHERITANCE 

public class InheritanceDemo {

	public static void main(String[] args) {
//	AdvanceCalc res1 = new AdvanceCalc();
//	System.out.println(res1.add(2, 8));
//	System.out.println(res1.sub(7, 5));
	
		Veryadv num = new Veryadv();
		System.out.println(num.add(1, 3));
		System.out.println(num.sub(4, 2));
		System.out.println(num.mul(7, 2));
		
	}

}
