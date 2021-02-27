package jdbc;
import java.sql.*;

public class EmployeeDemoJDBC {

	public static void main(String[] args) {

		try {
//			1. Load the driver
			Class.forName("org.postgresql.Driver");  
			
//			2. Create a connection to database
			Connection con=DriverManager.getConnection(  
					"jdbc:postgresql://localhost/testdb","postgres","password");  
			System.out.println("Connected to database");
			
//			3. Fire a sql query
			Statement stmt=con.createStatement();  
			ResultSet rs=stmt.executeQuery("select * from employees");  
			
//			4. Extract the result from query
			while(rs.next())  
				System.out.println(rs.getInt(1)+"  "+rs.getString(2));  
			
//			5. Close the connection to database
			con.close();  
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}

}
