/*
 * Created on march 25, 2007
 *
 * To change the template for this generated file go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
package com.dbui.util;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.StringTokenizer;

/**
 * @author brajveer_singh
 *
 * To change the template for this generated type comment go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
public class GenerateQuery   {
	public GenerateQuery(){}
//Local variables
private String queryResult;
private String errorMessage;
private String query;
private int status=-1;
String strDBUrl;
//Setter Functions
public void setErrorMessage(String errorMessage){this.errorMessage=errorMessage;}
public void setQuery(String query){this.query=query;}
public void setStatus(int status){this.status=status;}
public void setQueryResult(String queryResult){this.queryResult=queryResult;}

//Getter Functions
public String getErrorMessage(){return this.errorMessage;}
public String getQuery(){return this.query;}
public int getStatus(){return this.status;}
public String getQueryResult(){return this.queryResult;}
	
	
	public void exeQuery(String query,String database){
	//multipleEntry();
		System.out.println("i m called");
		Connection con=null;
        String result="";
		Statement stmt=null;
		ResultSet rs=null;
		PreparedStatement pstmt=null;
		String strToken="";

		int tokenIncr=0;
		try{
		query=query.trim();
		System.out.println("query is "+query);
		
		con=DBConnection.getSqliteConnection();

		StringTokenizer stQrery=new StringTokenizer(query,";");
		while(stQrery.hasMoreTokens()){
			tokenIncr=tokenIncr+1;
			strToken=stQrery.nextToken();
			if(strToken==null){
				continue;
			}
			System.out.println("tokens at "+tokenIncr+" [ "+strToken+"  ]");
			pstmt=con.prepareStatement(strToken);
			strToken=strToken.toLowerCase().trim();
			if(strToken.startsWith("select")){
               //System.out.println("tokens at select "+tokenIncr+" [ "+strToken+"  ]");
			  // System.out.println("result at "+tokenIncr+" [ "+result+"  ]");
				rs=pstmt.executeQuery();
				
				if(rs!=null){
				result=result+"<br><table  border=1 width='100%'><tr bgcolor=lightblue><td>Sr.No.</td>";
				
				ResultSetMetaData rsmd = rs.getMetaData();
				int numberOfColumns = rsmd.getColumnCount();
				
				for(int i=1;i<=numberOfColumns;i++)
				{
					System.out.print(rsmd.getColumnName(i)+" ");
					result=result+"<td>"+rsmd.getColumnName(i)+"</td>";
					System.out.print("      ");
				}
				result=result+"</tr>";
					   int k=0;
				while(rs.next()){
				k=k+1;
				result=result+"<tr><td>"+k+"</td>";
				
							 for(int j=1;j<=numberOfColumns;j++){
						 result=result+"<td>"+rs.getString(j)+"</td>";
						 }
					result=result+"</tr>";
					/*System.out.print(rs.getString(1));
					System.out.print("     ");
					System.out.print(rs.getString(2));
					System.out.println("");*/
					
				}
				
				result=result+"</table>";
				
				
				}

				DBConnection.closeRS(rs);
			
			}else{
			  pstmt.execute();
			}
			setQueryResult(result);
			setStatus(1);
			
		}
	
			
		}catch(Exception e){
		      setStatus(-1);  
			System.out.println("Problem in executing the query "+e.getMessage());
			
			setErrorMessage("Problem in executing the query :<br>"+ e.toString());
			
			
		}
		finally
				{	
					DBConnection.closeStmt(stmt);				
					DBConnection.closeCon(con);
					DBConnection.closeRS(rs);
				}	
		
	}
	public void multipleEntry(){
		System.out.println("i m called");
		Connection con=null;
	        String result="";
		Statement stmt=null;
		ResultSet rs=null;
		PreparedStatement pstmt=null;
		try{
		query="insert into abc(a,b) values(?,?)";
		System.out.println("query is "+query);
		
			con=DBConnection.getConnection("dsn");
			pstmt=con.prepareStatement(query);
			for(int j=0;j<100;j++){
			for(int i=1;i<=2;i++){
			pstmt.setString(i,"abc"+j);
			}
			pstmt.execute();
			}
			
		}catch(Exception e){
		        
			System.out.println("Problem in executing the create query "+e.getMessage());
			
			setErrorMessage("Problem in executing the create query :<br>"+ e.toString());
			
			
		}
		finally
				{	
					DBConnection.closeStmt(stmt);				
					DBConnection.closeCon(con);
					
				}	
		
	}	
			
			
			
			
			
	void printClassName(Object obj) {
			System.out.println("The class of " + obj +
							   " is " + obj.getClass().getName());
		}
	public static void main(String args[]){
		GenerateQuery BM=new GenerateQuery();
		Connection con=null;
	        String result="";
		Statement stmt=null;
		ResultSet rs=null;
		PreparedStatement pstmt=null;
		 DatabaseMetaData dbMetaData=null;
		 String str[]={"dsfs","sdf","sdafsa"};
		try{
			
		//str[0]="gvhh";
        con=DBConnection.getConnection(" ");
		pstmt=con.prepareStatement("create table b1 (a int)");
		dbMetaData=con.getMetaData();
		System.out.println("allTablesAreSelectable() "+dbMetaData.allTablesAreSelectable());
		System.out.println("allTablesAreSelectable() "+dbMetaData.getDatabaseProductName());
		System.out.println("allTablesAreSelectable() "+dbMetaData.getJDBCMajorVersion());
		System.out.println("getMaxTableNameLength() "+dbMetaData.getMaxTableNameLength());
		//rs=dbMetaData.getTables("vv","cv","cxv",str);
		//while(rs.next()){
			//System.out.println(rs.getString(1));
		//}
		 
		
		}catch(Exception e){
		        
			System.out.println("Problem in executing the create query "+e.getMessage());
			
			//setErrorMessage("Problem in executing the create query :<br>"+ e.toString());
			
			
		}
		finally
				{	
					DBConnection.closeStmt(stmt);				
					DBConnection.closeCon(con);
					
				}	
		
	
	}


}