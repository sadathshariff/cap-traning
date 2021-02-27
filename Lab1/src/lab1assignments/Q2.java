package lab1assignments;

import java.util.Scanner;

public class Q2 {
	
	public static void main(String[]args) {
	System.out.println("enter the color");
	@SuppressWarnings("resource")
	Scanner sc=new Scanner(System.in);
			String s=sc.next();{
			
	if (s.equals("red"))
			{
		System.out.println("stop");
			}
	else if (s.equals("yellow"))
			
			{
		System.out.println("ready");
			}
	else if (s.equals("green"))
			
			{
			System.out.println("go");
			
}
	else 
	{
		System.out.println("invalid input");
			}
			}
	}
}
	