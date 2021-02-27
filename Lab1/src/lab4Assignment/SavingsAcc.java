package lab4Assignment;

public class SavingsAcc extends Account {
	
	Double minBalance = 500.00;

	public SavingsAcc(long accNum, double balance, Person accHolder) {
		super(accNum, balance, accHolder);
	
	}

	public void withDraw(Double money) {
		if(balance-money >minBalance) {
			this.balance -= money;
			System.out.println("Withdraw successfull");
		}
		else {
			System.out.println("Insufficient Balance");
		}
	}
	
	
}
