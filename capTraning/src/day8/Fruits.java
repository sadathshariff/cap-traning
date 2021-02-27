package day8;

public class Fruits {
	String name;
	
	
	public Fruits(String name) {
		super();
		this.name= name;
	}
	
	public boolean equals(Object obj) {
		Fruits f= (Fruits)obj;
		return this.name.equals(f.name);
		
	}

	@Override
	public String toString() {
		return "Fruits [name=" + name + "]";
	}
	
}
