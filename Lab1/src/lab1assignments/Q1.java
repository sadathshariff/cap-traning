package lab1assignments;


	
	import java.util.Scanner;
	public class Q1 {
		int sum1(int number)
		
		{
			int sum1 = 0;
			while(number != 0) {
				int singleDigit = number % 10;
				sum1 = sum1 + (singleDigit * singleDigit * singleDigit);
				number = number / 10;
			}
			return sum1;
		}	

		public static void main(String[] args){
			Scanner sc = new Scanner(System.in);
			Q1 obj1 = new Q1();
			System.out.println(" To find the sum of the cubes of the digits of an n digit number!");
			
			//Getting the Integer Input from the user.
			System.out.print("Enter an Integer Number: ");
			int number1 = sc.nextInt();
			
			//Calling the sum method.
			int result = obj1.sum1(number1);
			
			//Displaying the output of  sum of the cubes of the digits of the number to user.
			System.out.println("The sum of the cubes of the digits of "+ number1 +" is "+ result +".");
			sc.close();
			
		} 
	
	
	


	

private int sum(int number1) {
// TODO Auto-generated method stub
return 0;
}
}
