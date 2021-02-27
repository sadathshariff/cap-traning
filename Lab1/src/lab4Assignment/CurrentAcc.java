package lab4Assignment;

public class CurrentAcc extends Account {

	Double overDraftLimit = -10000.00;
	public CurrentAcc(long accNum, double balance, Person accHolder) {
		super(accNum, balance, accHolder);
	}

	public void withdraw(Double money) {
		if(balance-money>overDraftLimit) {
			this.balance-=money;
			System.out.println("Withdrawn Successfully...");
		}
		else {
			System.out.println("OverDraftLimit reached!!!!");
		}
	}
}
