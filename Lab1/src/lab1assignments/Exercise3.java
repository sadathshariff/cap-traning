package lab1assignments;

import java.util.Scanner;

public class Exercise3 {

	String word;

	public Exercise3(String word) {
		super();
		this.word = word;
	}
	public void alterString() {
		StringBuffer str = new StringBuffer(word);
		StringBuffer str2 = new StringBuffer();
		for(int i = 0;i<str.length();i++) {
			char s = str.charAt(i);
			if(s=='A'|s=='E'|s=='I'|s=='O'|s=='U'|s=='a'|s=='e'|s=='i'|s=='o'|s=='u') {
				str2.insert(i, s);
			}
			else if(s=='Z') {
			str2.insert(i,"A");
			}
			else if(s=='z') {
				str2.insert(i,"z");
			}
			else {
				str2.insert(i, (char)(s+1));
			}
				
			}
		System.out.println(str2);
		}
	
	public static void main(String[] args) {
		Scanner s =new Scanner(System.in);
		System.out.println("enter word:");
		String text =s.next();
		Exercise3 e = new Exercise3(text);
		e.alterString();
		
	}
	}


