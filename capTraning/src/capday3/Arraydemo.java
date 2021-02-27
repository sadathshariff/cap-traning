package capday3;

import java.util.Arrays;

public class Arraydemo {
	// creating a method
//    static  void min(int a[]){
//    	int min = a[0];
//    	for(int i =0;i<a.length;i++) {
//    		if(min > a[i])
//    			min =a[i];
//    		
//    		System.out.println(min);
//    	}
//    	}
//    	 

	public static void main(String[] args) {
//int[] b = {2,5,6};
//min(b);
	
//		
//		
//		String names[] = new String[3];
//		names[0] = "sadath";
//		names[1] = "shariff";
//		names[2] = "king";
//		
//		
//		//array
//		int scores[] = new int[3];
//		
//		scores[0] = 90;
//		scores[1] = 98;
//		scores[2] = 95;
//		
////		System.out.println(names[2]  + " : " +scores[2]);
//		for(int i=0; i< scores.length ; i++) {
////			System.out.println(i);
//			System.out.println(names[i]  + " : " +scores[i]);
//		}
//		
//		System.out.println("end");
		
		
		
//
//		Employee emp1 = new Employee(11, "Ananya", 54343.33);
//		Employee emp2 = new Employee(34, "Priya", 34343.33);
//		Employee emp3 = new Employee(2, "Rajat", 44343.33);
//
//		Employee []employees = {emp1, emp2, emp3};

//		for(int i=0;i<employees.length ; i++) {	
//			System.out.println(employees[i]);
//		}
		
		//enhanced for-loop
//		for(Employee e:employees) {
//			System.out.println(e);
//			e.incrementSalary();
//			
//		}
//		int a[] = new int[3];
//		a[0] = 14;
//		a[1] = 13;
//	    a[2] = 12;
//	    
//	    for(int i =0; i<a.length; i++) {
//	    	System.out.println(a[i]);
//	    }
////	
//	    for(int i:a) {
//	    	System.out.println(i);
//	    }
		
	 sumofNum(2,3,5,7,7);	
	 
	 int arr[] = {4,3,2,6};
	 Arrays.sort(arr);
	 System.out.println(arr.toString());
		
	   
	    }
	
	

	public static void sumofNum(int ...j) {
	
		int sum =0;
		for(int arg:j) {
			sum+=arg;
		}
		
		System.out.println(sum);
		 String s1 = "Hello";
         String s2 = new String(s1);

         System.out.println(s1 + " equals " + s2 + " -> " +  
                       s1.equals(s2));
         System.out.println(s1 + " == " + s2 + " -> " + (s1 == s2));
         
         int i[] = {2,8,6,5};
         System.out.println(Arrays.binarySearch(i, 8));
         
         int num1[] = Arrays.copyOf(i,8);
         System.out.println(num1);
         
         
         
	
	}
	
	
		
	}



	


	

