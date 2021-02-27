package lab6Assignment;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Exercise5 {

	
	public void getSmallest(int arr[]) {
		List<Integer> num = new ArrayList<>();
		
		for(Integer i : arr) {
			num.add(i);
		}
		Collections.sort(num);
		System.out.println("second smallest :" + num.get(1));
	}
	
	public static void main(String[] args) {
		int arr[] = new int[] {24,6,1,2,3,4,5,20};
		Exercise5 e5 = new Exercise5();
		e5.getSmallest(arr);
		
	}
}
