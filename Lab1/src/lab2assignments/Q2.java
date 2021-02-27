package lab2assignments;
import java.util.Arrays;
import java.util.Scanner;
public class Q2 {
	private void sortStrings(String[] stringArray)
	{
		Arrays.sort(stringArray);
		if(stringArray.length % 2 == 0) {
			for(int i = 0; i < stringArray.length / 2; i++) {
				stringArray[i] = stringArray[i].toUpperCase();
			}
			for(int i = stringArray.length / 2; i < stringArray.length; i++) {
				stringArray[i] = stringArray[i].toLowerCase();
			}
		}
		else {
			for(int i = 0; i < (stringArray.length / 2)+1; i++) {
				stringArray[i] = stringArray[i].toUpperCase();
			}
			for(int i = (stringArray.length / 2)+1; i < stringArray.length; i++) {
				stringArray[i] = stringArray[i].toLowerCase();
			}
		}
		System.out.print("The Sorted String Array is: ");
		for(String stringArrays:stringArray) {
			System.out.print(stringArrays+" ");
		}
	}

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		Q2 obj1 = new Q2();
		
		System.out.println("To sort strings ");
		
		//Getting the Array of Strings from the client.
		System.out.print("Enter the number of elements in the array: ");
		int number = sc.nextInt();
		String stringArray1[] = new String[number];
		for(int num = 0; num < number; num++) {
			System.out.print("Enter a String at place "+(num + 1)+" : ");
			stringArray1[num] = sc.next();
		}
		sc.close();
		
		//Displaying the sorted string array.
		obj1.sortStrings(stringArray1);
	

	}





private void sortStrings1(String[] stringArray1) {
	// TODO Auto-generated method stub
	
}
}