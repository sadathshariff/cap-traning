package lab1assignments;

import java.util.Scanner;
public class Q6 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		sc.close();
		System.out.println("The sum of 1st " + n +" natural numbers"	+ " divisible by 3 or 5 is " +calculateSum(n));

	}

	private static int calculateSum(int n) {
		// TODO Auto-generated method stub
		int sum=0;
		for(int i=0;i<=n;i++) {
			if(i%3==0 || i%5==0) {
				sum +=i;
			}
		}
		return sum;
	}

}