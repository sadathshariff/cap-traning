package day8;

import java.util.ArrayList;

public class ArraylistDemo {

	public static void main(String[] args) {
		String s1 = "s1";
		String s2 = "s2";
		String s3 = "s3";
		
		
		ArrayList<String> list  = new ArrayList<String>();
		list.add(s1);
		list.add(s2);
		list.add(s3);
		
		System.out.println(list);
		
		for(String s : list) {
			System.out.println(s.toUpperCase());
		}
	}
}
