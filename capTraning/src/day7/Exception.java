package day7;

public class Exception {

	
	public static void main(String[] args) {
	int x =12;
	String s = null;
	
	
	//any error code 
	try {
		char c =s.charAt(0);
		System.out.println(c);
	}
	catch(NullPointerException ne) {
		System.out.println("Exception");
	}
	try {
	int result = x/0;
	}
	catch(ArithmeticException e){
		System.out.println("Put non-zero values");
	}
	
	}
}
