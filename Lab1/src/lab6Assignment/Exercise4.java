package lab6Assignment;

import java.util.HashMap;
import java.util.Map;

public class Exercise4 {

	public void getStudents(Map<Integer,Integer> students) {
		Map<Integer,String> medals = new HashMap<>();
		
		students.forEach((k,v)->{
			if(v> 90) {
				medals.put(k,"Gold Medal");
			}
			else if(v > 80 && v <=90) {
				medals.put(k, "Silver Medal");
			}
			else if(v <=80 && v > 70) {
				medals.put(k, "Bronze Medals");
			}
			else {
				System.out.println(k + " Not eligible for Medals");
			}
		});
		
		System.out.println(medals);
		
	}
	
	
	public static void main(String[] args) {
		Map<Integer,Integer> students = new HashMap<>();
		students.put(1001,80);
		students.put(1234,40);
		students.put(1324,83);
		students.put(1251,92);
		students.put(1758,77);
		students.put(1351,87);
		students.put(1425,99);
		students.put(1845,90);
		students.put(1627,72);
		
		Exercise4  e4 = new Exercise4();
		e4.getStudents(students);
	}
}
