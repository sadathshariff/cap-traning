package lab1assignments;

import java.util.Scanner;
public class Q4 {
	private boolean isPrime(int n) {
		
		if(n <= 1) {
			return false;
		}
		
		for(int i=2; i<n; i++) {
			if(n % i == 0) {
				return false;
			}
		}
		return true;
	}
	
	private void primeNumber(int number) {
		
		System.out.print("The Prime Numbers from 1 to "+number+" is: ");
		
		for(int i = 2; i <= number; i++) {
			if(isPrime(i)) {
				System.out.print(i+" ");
			}
		}
		
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		Q4 obj1 = new Q4();
		
		System.out.println("To print prime numbers ");
		
	
		System.out.print("Enter an Integer Number: ");
		int number = sc.nextInt();
		
		obj1.primeNumber(number);
		
		sc.close();

	}
}