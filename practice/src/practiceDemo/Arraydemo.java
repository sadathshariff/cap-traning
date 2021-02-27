package practiceDemo;


class Calc{
	public int add(int ...n) {
		int sum = 0;
		for(int i : n) {
			sum = sum + i;
		}
		return sum;
	}
}

public class Arraydemo {

	public static void main(String[] args) {
//		int num[] = new int[4];
//		
//		num[0] = 1;
//		num[1] = 2;
//		num[2] = 3;
//		num[3] = 4;
//		
//		
//		int num[] = {1,2,3,4};
//		
//		for(int i = 0;i<num.length;i++) {
//			System.out.println(num[i]);
//		}
		
		Calc obj = new Calc();
		System.out.println(obj.add(1,2,3,4,5,6,7,8,9,10));
	}

}
