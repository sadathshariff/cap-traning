package practice2;

class One implements Runnable{

	@Override
	public void run() {
		int i=0;
		while(i<20) {
		System.out.println("class one  is coding ");
		i++;
	}
	}
	
}

class Two implements Runnable{

	@Override
	public void run() {
		int i =0;
		while(i<10) {
		System.out.println("class 2 is cooking");
		i++;
	}
	}
	
}

class Three implements Runnable{

	@Override
	public void run() {
		
		int i =0;
		while(i<10) {
		System.out.println("class 3 is chilling");
		i++;
	}
		
	}
	
	
}

public class TheadDemo {
 
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Runnable r1 = new One();
		Thread t1= new Thread(r1);
		
		Runnable r2= new Two();
		Thread t2 = new Thread(r2);
		
		
		Runnable r3 = new Three();
		Thread t3 = new Thread(r3);
		
		
		t1.start();
		t2.start();
		t3.start();
		

	}

}
