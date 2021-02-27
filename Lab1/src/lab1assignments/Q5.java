package lab1assignments;

import java.util.Scanner;
public class Q5 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		sc.close();
		System.out.println("The diffrence is " +calculateDifference(n));

	}

	private static int calculateDifference(int n) {
		// TODO Auto-generated method stub
		int difference = 0,sum=0,sqrSum=0;
		for(int i=0;i<=n;i++) {
			sum +=i;
			sqrSum += (i*i);
		}
		sum = sum* sum;
		difference = sqrSum - sum;
		return difference;
	}
		

	}
