package lab3Assignment;

import java.util.Scanner;
import java.util.StringTokenizer;

//Exercise 1: Write a Java program that reads a line of integers 
//and then displays each integer and the sum of all integers. 
//(Use String Tokenizer class)?



public class Exercise1 {
	public static void main(String[] args) {
		int eachNum =0;
		int sum =0;

		Scanner s =  new Scanner(System.in);
		System.out.println("Enter the number separeted by ,");
		String numbers = s.next();
		System.out.println("Numbers in order:");
		StringTokenizer num = new StringTokenizer(numbers);
		while(num.hasMoreElements()) {
			eachNum = Integer.parseInt(num.nextToken(","));
			System.out.println(eachNum);
			sum = eachNum + sum;
		}
		System.out.println("\nsum of above numbers : "+sum);
		s.close();
		}
	}


