<%!
private boolean chkValue(String str){
  	boolean b=false;
	try{
	str=str.trim();
	}catch(Exception e){
	
	}
	

  	if(str==null||str.equalsIgnoreCase("null")||str.equals("")){
  		b=true;
  	}
  	return b;
  }
  
  private String getValue(String str){
             String strout="";
	try{
	str=str.trim();
	}catch(Exception e){
	
	}
	
  	if(str==null||str.equalsIgnoreCase("null")||str.equals("")){
  		strout="";
  	}else{
	strout=str;
	}
  	return strout;
  }
  
%>
<%@ page import="com.dbui.util.*" %>
<%
String database="";
String query="";
String strHidQuery="";
String Message="";
String queryResult="";

database=getValue(request.getParameter("database"));
if(database.length()==0){
database="devdsn";
}


query=request.getParameter("query");
query=getValue(query);
strHidQuery=request.getParameter("hidQuery");

if(query.length()>1){
	GenerateQuery GQR=new GenerateQuery();

GQR.exeQuery(strHidQuery,database);

if(GQR.getStatus()==1){
queryResult=GQR.getQueryResult();
queryResult=getValue(queryResult);

Message="Query excecuted successfully";
}else{
Message=GQR.getErrorMessage();
}

System.out.println("queryResult"+queryResult);

}%>





<html>
  <head>
    <title>DB Devloper</title>
    <meta content="">
    <style></style>

    <SCRIPT language="javascript">

function validateForm()

       {

/* var theSelection=document.selection.createRange().text;
if(theSelection){
document.queryForm.hidQuery.value=theSelection;
}else{ */
document.queryForm.hidQuery.value=document.queryForm.query.value;
//}
        //document.queryForm.action="/dbui/admin/queryForm.jsp";
        document.queryForm.submit();
	return true;
	}
	
</script>
  </head>
  
  <BODY >
 
  <form name="queryForm" method="post">
<input type="hidden" name="hidQuery">
  <table align="center">
<tr><td><input type="text" name="database" value="<%=getValue(database)%>">
  </td></tr>


<tr>  
<td>
<%=Message%>
</td>
</tr>
 
  <tr bgcolor="lightblue">
  <td width="100%" nowrap>Write Your Query</td>
  
  </tr>
 
  
  <tr>
 
  <td>
 <textarea name="query" rows="15" cols="80" > <%=query%></textarea>
  </td>
 </TR>
  <TR>
      <TD ALIGN="center" COLSPAN="2">
        <DIV ALIGN="center">
          <INPUT TYPE="submit" NAME="Submit1"   VALUE="submit" onfocus onClick="return validateForm()" >
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <INPUT TYPE="reset" NAME="Submit2" VALUE="Reset">
        </DIV>

      </TD>
    </TR>
    </table>
   <center>
 <%=queryResult%>
 </center>
  </form>
  </body>
  
</html>