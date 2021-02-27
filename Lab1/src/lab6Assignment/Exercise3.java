package lab6Assignment;

import java.util.HashMap;
import java.util.Map;

public class Exercise3 {
	//square of num
	public static void getSquares(int[] num) {
		Map<Integer,Integer> squareNum = new HashMap<>();
		
		for(int i :num) {
			squareNum.put(i, i*i);
		}
		System.out.println("Given Numbers and their Squares:");
		System.out.print(squareNum);
	}
	//cube of num
	public static void getCubes(int[] num1) {
		Map<Integer,Integer> cubesNum = new HashMap<>();
		for(int i :num1) {
			cubesNum.put(i, i*i*i);		
		}
		System.out.println(cubesNum);
	}
	
	public static void main(String[] args) {
		int [] arr = new int[] {2,3,5,6,8,12};
		
		getSquares(arr);
		getCubes(arr);
	}

}
