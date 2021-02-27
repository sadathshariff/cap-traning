package lab6Assignment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Exercise6 {

	public void voterList(Map<String,Integer>people){
		List<String> eligibleVoters = new ArrayList<>();
		people.forEach((ID,age) ->{
			if(age>18) {
				eligibleVoters.add(ID);
		}	
		});
		
		System.out.println("Eligible to vote and their IDs : " + eligibleVoters);
	}
	
	public static void main(String[] args) {
		Map<String,Integer> people = new HashMap<>();
		people.put("AD23", 25);
		people.put("BU45", 37);
		people.put("DE67", 17);
		people.put("ZR51", 48);
		people.put("SW29", 19);
		people.put("VI53", 53);
		people.put("FR17", 15);
		people.put("GR73", 21);
		
		Exercise6 e6 = new Exercise6();
		e6.voterList(people);
	}
}
