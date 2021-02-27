package lab2assignments;

import java.util.Arrays;
import java.util.Scanner;

public class Q3 {
	public static void main(String[] args) 
    {
    	// Initializing the variables
        int n;
        Scanner Sc = new Scanner(System.in);
        
        // Enter the number of elements.
        System.out.print("Enter number of elements : ");
        n = Sc.nextInt();//Number of elements
        
        // creating an array.
        int a[] = new int[n];
        
        // enter array elements.
        System.out.println("Enter the elements in array : ");
        for (int i = 0; i < n; i++) 
        {
            a[i] = Sc.nextInt();
        }
        
        int a1[]=new int[n];//array for the result
        a1=getSorted(a,n);//function call for reversing and sorting
        System.out.print("The Array after reversing and sorting the numbers is: ");
		
        for(int numbers:a1) //printing the result array which is reversed and sorted
		{
			System.out.print(numbers+" ");
		}
    
    }
	
	public static int[] getSorted(int arr[],int n)
	{
		
		int[] revarr = new int[n];
		//Reversing the numbers in the array and displaying it.
		for(int i = 0; i < n; i++)
		{
			while(arr[i] != 0)
			{
				int digit = arr[i] % 10;
				revarr[i] = revarr[i] * 10 + digit;
				arr[i] /= 10;
			}
		}
		
		System.out.print("The Array before reversing the numbers is: ");
		for(int numbers:revarr) 
		{
			System.out.print(numbers+" ");
		}
		System.out.println();
		
		//Sorting the reversed array and displaying it.
		Arrays.sort(revarr);
		return revarr;//return the reversed and sorted array.
	}

}