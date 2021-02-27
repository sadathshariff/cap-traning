package lab6Assignment;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Exercise7 {

	
	public void getSorted(int arr[]) {
		System.out.println("Given array:");
		for(int i : arr) {
			System.out.print(i + " ");
		}
		
		List<Integer> rev = new ArrayList<>();
		for(int i :arr) {
			StringBuilder sb = new StringBuilder(String.valueOf(i));
			rev.add(Integer.parseInt(sb.reverse().toString()));
		}
		
		System.out.println(rev);
		Collections.sort(rev);
		System.out.println(rev);
	}
	public static void main(String[] args) {
		
		int arr[] = new int [] {321,243,541};
		
		Exercise7 e7 = new Exercise7();
		e7.getSorted(arr);
	}
	
}
