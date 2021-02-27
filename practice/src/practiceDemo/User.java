package practiceDemo;

public class User {
   String name;
   String password;
   String confirmPassword;
   
   int age;
   
   
   public int getAge() {
	   return age;
   }
	
   public User() {
	   System.out.println("default constructors");
   }
   public User(String name,String password) {
	   this.name = name;
	   this.password = password;
   }
   public User(String name,String password,String confrimPassword) {
	   super();
	   this.name = name;
	   this.password = password;
	   this.confirmPassword = confirmPassword;
   }
   
		
		
		
		public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getConfirmPassword() {
		return confirmPassword;
	}
	
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	

	@Override
	public String toString() {
		return "User [name=" + name + "]";
	}

	public static void main(String[] args) {
		User user1 = new User("admin","testing");
		System.out.println(user1);
		
		User user2 = new User("manager","pass","pass");
		System.out.println(user2);
	}

}
