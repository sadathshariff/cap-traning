package lab5Assignment;

public class Exercise2 {
	
	String firstName;
	String lastName;
	
	//constructors
	public Exercise2(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	//methods
	
	public void checkName() throws Exception {
		if(firstName == ""  || lastName == "") {
			throw new Exception();
		}
		System.out.println(firstName + " " +  lastName);
	}
	
	public static void main(String[] args) {
		Exercise2 e2 = new Exercise2("Sham","yadav");
		Exercise2 e22 = new Exercise2("ram","");
		
		try {
			e2.checkName();
			e22.checkName();
		} catch (Exception e) {
			System.out.println("first Name and last name cannot be Blank!!");
		}
	}

}
