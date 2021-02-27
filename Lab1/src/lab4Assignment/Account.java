package lab4Assignment;

public class Account{
	long accNum;
	double balance;
	Person accHolder;
	
	//Constructors
	public Account(long accNum, double balance, Person accHolder) {
		super();
		this.accNum = accNum;
		this.balance = balance;
		this.accHolder = accHolder;
	}
	//Methods
	
	public void deposit(Double money) {
		this.balance += money ;
		System.out.println("Deposited Successfully.:"+ balance);
	}
	
	public void withDraw(Double money) {
		if(balance - money > 500) {
			this.balance -= money;
			System.out.println("Withdrawn Successfully :" +money);
		}
	}

	public long getAccNum() {
		return accNum;
	}

	public void setAccNum(long accNum) {
		this.accNum = accNum;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Person getAccHolder() {
		return accHolder;
	}

	public void setAccHolder(Person accHolder) {
		this.accHolder = accHolder;
	}

	@Override
	public String toString() {
		return "Account [accNum=" + accNum + ", balance=" + balance + ", accHolder=" + accHolder + "]";
	}

	
	
	
	
	
	

}
