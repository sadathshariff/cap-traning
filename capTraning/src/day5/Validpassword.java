package day5;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validpassword {

	public static boolean validPassword(String password) {
		
		
		// Regular Expression Regex to check password
		String regex = "^(?=.*[0-9])"
                + "(?=.*[a-z])(?=.*[A-Z])"
                + "(?=.*[@#$%^&+=])"
                + "(?=\\S+$).{6,20}$";
		
		Pattern p = Pattern.compile(regex);
		
		if(password == null) {
			return false;
		}
		
		Matcher matcher = p.matcher(regex);
		
		return matcher.matches();
	}
	
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 String str1 = "Geeks@portal20"; 
	        System.out.println(validPassword(str1)); 
	}

}
