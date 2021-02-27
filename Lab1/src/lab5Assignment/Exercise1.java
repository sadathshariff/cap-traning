package lab5Assignment;

public class Exercise1 {
	
	int age;

	public Exercise1(int age) {
		super();
		this.age = age;
	}
	
	public void number() throws Exception {
		if(age<=15) {
			throw new Exception();
		}
		System.out.println("user age:"+age);
		System.out.println("User is  Allowed");
	}
	
	public static void main(String[] args) {
		Exercise1 e1 = new Exercise1(18);
		
		try {
			e1.number();
		} catch (Exception e) {
			System.out.println("user age is"+ e1.age + "" + "Not allowed!!");
			
		}
		
	}

}
