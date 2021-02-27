package lab1assignments;

import java.util.Scanner;
public class Q7 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		sc.close();
		System.out.println("Increasing Number : " + checkNumber(n));

	}

	private static boolean checkNumber(int num) {
		// TODO Auto-generated method stub
		boolean flag= true;
		int currentDigit = num % 10;
	       num = num/10;
	       while(num>0){
	           if(currentDigit <= num % 10){
	               flag = false;
	               break;
	           }
	           currentDigit = num % 10;
	           num = num/10;
	       }
		return flag;
	}
}
