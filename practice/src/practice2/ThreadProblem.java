package practice2;

class MyClass implements Runnable{

	@Override
	public void run() {
		int i =0;
		while(i<100) {
		System.out.println("Good morning");
		i++;
		}
	}
	
}
class MyClass2 implements Runnable{

	@Override
	public void run() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		int i=0;
		while(i<100) {
	System.out.println("Good AfterNoon");
		i++;
		}
		
	}
	
}

public class ThreadProblem {

	public static void main(String[] args) {
		MyClass m1= new MyClass();
		Thread t1 = new Thread(m1);
		
		MyClass2 m2 = new MyClass2();
		Thread t2 = new Thread(m2);
		
		t1.start();
		try {
			t1.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		t2.start();
		System.out.println(t1.getName());
		System.out.println(t2.getState());
		System.out.println(t1.currentThread());
		System.out.println(t2.getName());
	}

}
