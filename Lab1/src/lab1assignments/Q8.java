package lab1assignments;

import java.util.Scanner;
public class Q8 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		sc.close();
		System.out.println( n +" is a power of 2 : " +checkNumber(n));

	}

	private static boolean checkNumber(int n) {
		// TODO Auto-generated method stub
		boolean flag = true;
		while(n > 1) {
			if(n%2 != 0) {
				flag = false;
				break;
			}
			n = n/2;
		}
		return flag;
	}


}
