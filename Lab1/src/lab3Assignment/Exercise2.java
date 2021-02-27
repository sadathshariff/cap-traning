package lab3Assignment;

import java.util.Scanner;

public class Exercise2 {
	
	String str;
	
	public void getImage(String str) {
		StringBuffer  st = new StringBuffer(str);
		System.out.println(st + "|" + st.reverse());
		
	}
	
	
	
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the String:");
		String word = s.next();
		Exercise2 e = new Exercise2();
		e.getImage(word);
		s.close();
	}

}
