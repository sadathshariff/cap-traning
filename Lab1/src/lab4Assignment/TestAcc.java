package lab4Assignment;

public class TestAcc {
	
	
	public static void main(String[] args) {
		
		Person p1 = new Person("Smith",32.0f);
		Person p2 = new Person("Kathy",25.0f);
		
		Account a1 = new Account(123451L,2000.0,p1);
		Account a2 = new Account(242314L,3000.0,p2);
		
		System.out.println(a1);
		System.out.println(a2);
		
		a1.deposit(2000.0);
		a2.withDraw(2000.0);
		
		Person p3 = new Person("Arjun",31.0f);
		Person p4 = new Person("priya",27.0f);
		
		SavingsAcc s1 = new SavingsAcc(123444L,2000.0,p3);
		CurrentAcc c1 = new CurrentAcc(345663L,1000.0,p4);
		
		System.out.println(s1);
		s1.withDraw(1000.0);
		s1.withDraw(500.0);
		
		System.out.println(s1);
		
		
		System.out.println(c1);
		c1.withdraw(100.0);
		c1.withdraw(100000.0);
		System.out.println(c1);
		
		
	}

}
