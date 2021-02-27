package day8;

import java.util.ArrayList;
import java.util.List;

public class FruitsDemo {
	
	public static void main(String[] args) {
		List<Fruits> fruits = new ArrayList<>();
		fruits.add(new Fruits("apple"));
		fruits.add(new Fruits("orange"));
		fruits.add(new Fruits("banana"));
		
		System.out.println(fruits);
		Fruits f  = new Fruits("apple");
		System.out.println(f.equals(new Fruits("Mango")));
		System.out.println(fruits.contains(f));
		
	}

}
