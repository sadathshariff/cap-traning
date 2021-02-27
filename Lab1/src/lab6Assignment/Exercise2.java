package lab6Assignment;

import java.util.HashMap;
import java.util.Map;

public class Exercise2 {
	
	public void countChar(char[] c) {
		System.out.println("Input  characters");
		for(char ch : c ) {
			System.out.print( ch + " ");
		}
		
		Map<Character,Integer> charCount = new HashMap<>();
		for(Character ch :c) {
			if(charCount.containsKey(ch)) {
				Integer n = charCount.get(ch);
				n++;
				charCount.replace(ch, n);	
			}
			else {
				charCount.put(ch, 1);
			}
		}
		System.out.println("\nNumber of times a character has been repeated:");
		System.out.println(charCount);
	}
	
	
	
	
	public static void main(String[] args) {
		char[] arr = new char[11];
		arr[0]='b';
		arr[1]='a';
		arr[2]='b';
		arr[3]='c';
		arr[4]='d';
		arr[5]='b';
		arr[6]='a';
		arr[7]='b';
		arr[8]='b';
		arr[9]='d';
		arr[10]='c';
		
		Exercise2 charCount = new Exercise2();
		charCount.countChar(arr);
		}
	}


