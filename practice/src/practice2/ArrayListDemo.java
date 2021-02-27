package practice2;

import java.util.ArrayList;

public class ArrayListDemo {

	public static void main(String[] args) {

		ArrayList<Double> l1 = new ArrayList<>();
		l1.add(1.0);
		l1.add(6.76);
		l1.add(8.45);
		l1.add(1.97);
		l1.add(2, 10.23);
		
		for(Double i : l1) {
			System.out.println(i);
		}
		System.out.println(l1.contains(1.1));
	}

}
