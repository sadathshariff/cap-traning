package day5;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String input  = "Shop,hop,mopping,shopping";	
		
		Pattern pattern = Pattern.compile("hop");
		Matcher matcher  = pattern.matcher(input);
		
		
		while(matcher.find()) {
			System.out.println(matcher.group() + ":" + matcher.start()+ ":" + matcher.end());
		}
	}

}
