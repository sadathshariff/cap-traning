package practiceDemo;

public class PracticeDemo {

		String email;
		String password;
		String confirrmpassword;
		static final String country ="India";
		
		//constructor
		public PracticeDemo(String email,String password) {
			this.email = email;
			this.password = password;
			System.out.println(this);
		}
		
		public PracticeDemo(String email,String password, String confirmpassword) {
			this(email,password);
			this.confirrmpassword = confirmpassword;
			
		}
		
		//methods
		
		public void register() {
			System.out.println("User Registeration");
			if(this.email.contains("@")&& this.password.length()>=6 && this.confirrmpassword.equals(password)) {
				System.out.println("user registered succesfully!!");
			}
			else {
				System.out.println("failed!!!!");
			}
		}
		
		public void login() {
			System.out.println("login!!");
			if(this.email.equals(this.password)) {
				System.out.println("success");
			}
			else {
				System.out.println("failure");
			}
		}
	
	
		@Override
		public String toString() {
			return "PracticeDemo [email=" + email + ", password=" + password + ", confirrmpassword=" + confirrmpassword
					+ "]";
		}
	
	
	public static void main(String[] args) {
			PracticeDemo user = new PracticeDemo("sadatgh@gmail.com","test");
			user.register();
//			user.country = "arab";
//			System.out.println(user.country);
//			System.out.println(user.country);
			
			PracticeDemo user2 = new PracticeDemo("sdad@gmail.com","testng","testing");
			user2.register();
		
			
			PracticeDemo log = new PracticeDemo("sad@ed","sad@");
			log.login();
	}

	

}
