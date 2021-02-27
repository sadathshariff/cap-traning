package practiceDemo;

public class Product {
	
	//fields
	int id;
	String name;
	double price;
	
	//constructors
	Product(int id,String name,double amount){
		this.id = id;
		this.name = name;
		price = amount;
	}
	

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + "]";
	}


	public static void main(String[] args) {
		Product p1 = new Product(14,"Iphone",60000.00);
		Product p2 = new Product(15,"samsung",45000.00); 
		System.out.println(p1);

	}

}
