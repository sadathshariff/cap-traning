package day12;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class BookTest {
	public static void main(String[] args) {
		List<Book> books = new ArrayList<>();
		books.addAll(Dataextractor.getFromAmazon("java"));
		books.addAll(Dataextractor.getFromBarnesAndNoble("java"));
		
		//Count the Books
		System.out.println("Count of books with rating greater than 4.7: " +
				books.stream().filter((b) -> b.getRating() > 4.7).count() +"\n");
		
		System.out.println("Check if all books match the criteria: " +
				books.stream().allMatch((b) -> b.getRating()>= 1.1) +"\n");
		System.out.println("Print titles of the books: " );
		books.stream().map(b -> {
			return b.getTitle();
		})
		.forEach((b) -> System.out.print(b +" "));
		
		System.out.println("\n\n" +"Print all books conatining title \'Java 11\': " );
		books.stream().filter((b) -> b.getTitle().contains("Java 11")).forEach((b) -> System.out.print(b +" "));

		System.out.println("\n\n" +"Sort books by rating: ");
		books.stream().sorted((books1, books2) -> books1.getRating().compareTo(books2.getRating())).forEach((b) -> System.out.println(b));

		System.out.println("\n\n" +"Find book with minimum rating: ");
		Optional<Book> bookFound = books.stream().min((books1, books2) -> books1.getRating().compareTo(books2.getRating()));
			if(bookFound.isPresent()) {
				System.out.println(bookFound);	
				} else {
					System.out.println("No books found");
}

			System.out.println("\n\n" +"Find the maximum rating value: "
					+ books.stream().max((books1, books2) -> books1.getRating().compareTo(books2.getRating()))
			.map(b -> {
				return b.getRating();
				}).get());


}
	
	}


