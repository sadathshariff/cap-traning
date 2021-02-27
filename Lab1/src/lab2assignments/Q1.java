package lab2assignments;

import java.util.Scanner;

public class Q1 {
public static void main(String[] args) 
	
    {
    	// Intialising the variables
        int n, min;
        Scanner Sc = new Scanner(System.in);
        
        // Enter the number of elements.
        System.out.print("Enter number of elements : ");
        n = Sc.nextInt();
        
        // creating an array.
        int a[] = new int[n];
        
        // enter array elements.
        System.out.println("Enter the elements in array : ");
        for (int i = 0; i < n; i++) 
        {
            a[i] = Sc.nextInt();
        }
        min=getSecondSmallest(a,n);
        System.out.println("Second smallest number is:"+min);
    }
	public static int getSecondSmallest(int arr[],int n)
	{
		int min;
		
        for (int i = 0; i < n; i++) 
        {
            for (int j = i + 1; j < n; j++) 
            {
                if (arr[i] > arr[j]) 
                {
                    min = arr[i];
                    arr[i] = arr[j];
                    arr[j] = min;
                }
            }
        }
        return arr[1];
    }
}