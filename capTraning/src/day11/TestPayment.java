package day11;
interface sayName{
	public String say(String name);
}
interface whattodo{
	public String what(String name);
}
public class TestPayment {

	public static void main(String[] args) {

		Payment p1 = new NEFTpayment();
		p1.perform();
		
		Payment p2 = new RTGSpayment();
		p2.perform();
		
		Payment p3 = () -> System.out.println("performing UPI payment");
		p3.perform();
		
		Calc c1 = (int x,int y) ->{return (x+y);};
		int result  = c1.Calculate(2, 3);
		System.out.println(result);
		
		Calc c2 = (int x,int y) ->{return (x-y);};
		int result2 = c2.Calculate(2, 0);
		System.out.println(result2);
		
		sayName s1 =(name)-> {
			return "hello " + name;
		};
		System.out.println(s1.say("sadath"));
		
		sayName s2 = (name)-> {
			return "hi " +name;
		};
		
		 String n = s2.say("shariff");
		 System.out.println(n);
		 
		 whattodo s = (name) -> {
			 return "What to do " + name;
		 };
		 System.out.println(s.what("sadath"));
		 
		 whattodo ss = (name) -> {
			 return name;
		 };
		 System.out.println(ss.what("the hell"));
		 

	}

}
