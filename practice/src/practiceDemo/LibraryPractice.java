package practiceDemo;

class Library{
	String[] books;
	int no_of_books;
	
	Library() {
		this.books = new String[100];
		this.no_of_books = 0;
	}
	
	void add_book(String books) {
		this.books[no_of_books] = books;
		no_of_books++;
		System.out.println("book added :" + books);
		System.out.println("no of books :" + no_of_books);
	}
	
}

public class LibraryPractice {

	public static void main(String[] args) { 
		// TODO Auto-generated method stub
		Library Cl = new Library();
		Cl.add_book("think grow rich");
	}

}
