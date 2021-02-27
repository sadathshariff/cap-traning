package lab2assignments;

import java.util.Arrays;
import java.util.Scanner;

public class Q4 {
	//Method to remove duplicates and sort the integers in descending order.
		private void modifyArray(int[] numberArray) {
			 
		    Arrays.sort(numberArray);
		    int[] temp = new int[numberArray.length];  
	        int j = 0;  
	        for (int i=0; i<numberArray.length-1; i++){  
	            if (numberArray[i] != numberArray[i+1]){  
	                temp[j++] = numberArray[i];  
	            }  
	         }  
	        temp[j++] = numberArray[numberArray.length-1];     
	        int temp1[] = new int[j];
	        // Changing original array  
	        for (int i=0; i<j; i++){  
	        	temp1[i] = temp[i];  
	        }   
	         
			System.out.print("The array after removing duplicate and sorting in descending order are: ");
			for(int i=temp1.length-1; i>=0; i--) {
				System.out.print(temp1[i]+" ");
			}
			
		}

		public static void main(String[] args) {

			Scanner sc = new Scanner(System.in);
			
			Q4 obj1 = new Q4();
			
			System.out.println(" Removing duplicates and sorting the integers in descending order program!");
			
			//Getting the Array of Strings from the client.
			System.out.print("Enter the number of elements in the array: ");
			int number = sc.nextInt();
			int numberArray[] = new int[number];
			for(int num = 0; num < number; num++) {
				System.out.print("Enter an Integer Number at place "+(num + 1)+" : ");
				numberArray[num] = sc.nextInt();
			}
			sc.close();
			
			//Displaying the integer array after removing duplicated and sorting it in decending order.
			obj1.modifyArray(numberArray);

		}
}
