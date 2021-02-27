package lab6Assignment;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Exercise1 {


	public static void getValues(Map<Integer,Integer>numMap) {
		System.out.println(numMap);
		System.out.println("Before SOrting");
		System.out.println(numMap.values());
		
		System.out.println("After Sorting");
		
		List<Integer> sortNum  = new ArrayList<>();
		
		for(Integer i :numMap.keySet()) {
			sortNum.add(numMap.get(i));
		}
		
		Collections.sort(sortNum);
		System.out.println(sortNum);
	}
	
	
	public static void main(String[] args) {
		Map<Integer,Integer> num = new HashMap<>();
		num.put(1,24);
		num.put(2,31);
		num.put(3,12);
		num.put(4,43);
		num.put(5,27);
		
		
		
		getValues(num);
		 
		
	}
}
