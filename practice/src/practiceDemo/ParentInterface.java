package practiceDemo;

public interface ParentInterface {
	 void meth1();
	 void meth2();
	  default void cal(int i,int j) {
		 int result;
		  result = i+j;
		 System.out.println(result);
	 }
}

interface Child extends ParentInterface{
	void meth3();
	void meth4();
	
}
