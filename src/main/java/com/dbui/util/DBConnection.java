/*
 * Created on Jun 28, 2005
 *
 * To change the template for this generated file go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
package com.dbui.util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @author brajveer_singh
 *
 * To change the template for this generated type comment go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
public class DBConnection {


	public synchronized   static Connection getConnection( String strdsn) throws Exception {     

		Connection con=null;	
		try{
			con=getConnectionWithoutPool(strdsn);	
		}catch(Exception ex){
			ex.printStackTrace();		 
			throw(ex);
		}


		return con;
	}



	public static Connection getSqliteConnection() {

		Connection connection = null;
		try {
			Class.forName("org.sqlite.JDBC");

			// create a database connection
			// connection =
			// DriverManager.getConnection("jdbc:sqlite:sample.db");
			connection = DriverManager.getConnection("jdbc:sqlite:D:/Development/sqllite/test.db");
			if (connection != null) {
				System.out.println("Connection created sucessfully.");
			}
		} catch (SQLException | ClassNotFoundException e) {
			// if the error message is "out of memory",
			// it probably means no database file is found
			System.err.println(e.getMessage());
		}

		return connection;

	}

	/**
	 *return the database connection
	 */
	public static Connection getConnectionWithoutPool(String strDevdsn) throws Exception {
		Connection con = null;
		//  String username = "ynk_write_user";
		//String password = "YnkAdmin@14";

		String username = "survey_db_user";
		String password = "survey_db_user";
		String url = "";
		String driver = "";
		try{          

			//Class.forName("oracle.jdbc.driver.OracleDriver");
			//Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@oracle.cis.ksu.edu:1521:ORACLE", "username", "password");


			// driver = "oracle.jdbc.driver.OracleDriver";
			//driver="sun.jdbc.odbc.JdbcOdbcDriver";
			driver="com.mysql.jdbc.Driver";
			//String url="scott/tiger@//win2k3.qualtech-consultant.com/faerp";
			// url="jdbc:oracle:thin:@win2k3.qualtech-consultant.com:1521:faerp";
			//url="jdbc:odbc:devdsn";
			//               if(strDevdsn==null){
			url="jdbc:mysql://localhost:3306/ynkdb_uat?zeroDateTimeBehavior=convertToNull";	   
			/* }else{
            	   url="jdbc:odbc:"+strDevdsn;
               }*/

			//url="jdbc:postgresql://199.239.233.191:5432/legendfaresdb";
			//// username = "postgresql";
			// username = "scott";
			// password = "tiger";
			/* try{
		   	System.out.println("registring driver ");
			Class.forName(driver);
			System.out.println("driver registered"); 
		   }catch(ClassNotFoundException e){
		   	System.out.println("class not found for drivers " +e);
		   }*/

			con= DriverManager.getConnection(url,username,password);
			// for access

			// con= DriverManager.getConnection(url);





		}catch(Exception ex){
			ex.printStackTrace();	
			System.out.println("problemin DBConnection "+ex);	 
			throw(ex);
		}
		return con;
	}

	/**close Connection*/
	public synchronized static void closeCon(Connection con){

		try
		{

			con.close();

		}
		catch (Exception Ex)
		{
			System.out.println("Error is closing the connection");
			con=null;
		}

		/*	try
				{
				JavaConnectionPool.getConnectionPool().returnConnection(con);	
				}
				catch (Exception Ex)	{}

		 */

	}


	/**close Result Set */
	public synchronized static void closeRS(ResultSet rs){
		if(rs!=null){
			try{rs.close();}catch(Exception e){}		
		}
	}
	/**close Statement */
	public synchronized static void closeStmt(Statement stmt){
		if(stmt!=null){
			try{stmt.close();}catch(Exception e){}		
		}
	}
	/**close Connection*/
	/*
		   public synchronized static void closeCon(Connection con){
				if(con!=null){
						try{con.close();}catch(Exception e){
						 LogWriter.println(" error in closing connection from dbconnect= "+e);
						}		
				}
		}
	 */
	public static void main(String ads[]){
		System.out.println("i m in mian");
		try{
			DBConnection.getConnectionWithoutPool("devdsn");
		}catch(Exception e){
			System.out.println("Problem in creating connection  "+e);
		}
	}
}
