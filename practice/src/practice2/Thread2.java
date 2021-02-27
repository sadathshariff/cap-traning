package practice2;

class Hi implements Runnable{
	public void run() {
		for(int i=0;i<=5;i++) {
			System.out.println("Hi"+ i);
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

class Hello implements Runnable{
	public void run() {
		for(int i=0;i<=5;i++) {
			System.out.println("hello"+i);
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
public class Thread2 {

	public static void main(String[] args) {
		Hi obj1 = new Hi();
		Hello obj2 = new Hello();
		
		Thread t1 = new Thread(obj1);
		Thread t2 =  new Thread(obj2);
		
		System.out.println(t1.getPriority());
		t2.setPriority(10);
		
		t1.start();
		t2.start();
		
		try {
			t1.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(t2.isAlive());
		try {
			t2.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		System.out.println("end");
		System.out.println(t1.isAlive());
		
	
	}
}
