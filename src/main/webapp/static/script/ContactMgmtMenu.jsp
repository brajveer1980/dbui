<%
boolean testFlag=true;
String tempString="";
%>
<SCRIPT>

/*
Copyright (c) 2001 Thomas Brattli (www.bratta.com)

eXperience DHTML coolMenus - Get it at www.bratta.com
Version 3.02
This script can be used freely as long as all copyright messages are
intact. 
*/

/*
Default browsercheck - Leave this one
*/
function lib_bwcheck(){ //Browsercheck (needed)
	this.ver=navigator.appVersion; this.agent=navigator.userAgent
	this.dom=document.getElementById?1:0
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
	this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom)?1:0;
	this.ie4=(document.all && !this.dom)?1:0;
	this.ie=this.ie4||this.ie5||this.ie6
	this.mac=this.agent.indexOf("Mac")>-1
	this.opera5=this.agent.indexOf("Opera 5")>-1
	this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
	this.ns4=(document.layers && !this.dom)?1:0;
	this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5 || this.dom)
	return this
}
var bw=new lib_bwcheck()

var mDebugging=2

oCMenu=new makeCoolMenu("oCMenu")
oCMenu.useframes=0
//oCMenu.frame="frmMain"

oCMenu.useclick=0

oCMenu.useNS4links=0

oCMenu.NS4padding=2 

oCMenu.checkselect=1

oCMenu.offlineUrl="files://WINDOWS/Profiles/Iesh/Desktop/Samtel GmbH/Templates/template2///"
oCMenu.onlineUrl="http://www.fsltechnologies.com/e-web/Final/"

oCMenu.pagecheck=0
oCMenu.checkscroll=0
oCMenu.resizecheck=1
oCMenu.wait=1000

//Background bar properties
oCMenu.usebar=0
oCMenu.barcolor="#A32C2C"
oCMenu.barwidth="100%"
oCMenu.barheight=21
oCMenu.barx=0
oCMenu.bary=70
oCMenu.barinheritborder=0

//Placement properties
oCMenu.rows=1
oCMenu.fromleft=0
oCMenu.fromtop=100
oCMenu.pxbetween=1

oCMenu.menuplacement="center"

oCMenu.NS4hover=1

oCMenu.level[0]=new Array() //Add this for each new level
oCMenu.level[0].width=25
oCMenu.level[0].height=21
oCMenu.level[0].bgcoloroff=""
oCMenu.level[0].bgcoloron=""
oCMenu.level[0].textcolor="White"
oCMenu.level[0].hovercolor="#cccccc"
oCMenu.level[0].style="padding-top:1px; font-family:verdana,arial,helvetica; font-size:10px;"
oCMenu.level[0].border=0
oCMenu.level[0].bordercolor="red"
oCMenu.level[0].offsetX=0
oCMenu.level[0].offsetY=-4
oCMenu.level[0].NS4font="tahoma,arial,helvetica"
oCMenu.level[0].NS4fontSize="2"

oCMenu.level[0].clip=1
oCMenu.level[0].clippx=15
oCMenu.level[0].cliptim=50
oCMenu.level[0].filter="progid:DXImageTransform.Microsoft.RandomDissolve(duration=0.5)"

oCMenu.level[0].align="bottom" //Value: "top" || "bottom" || "left" || "right" 

oCMenu.level[1]=new Array() //Add this for each new level (adding one to the number)
oCMenu.level[1].width=50
oCMenu.level[1].height=20
oCMenu.level[1].hovercolor="yellow"
oCMenu.level[1].bgcoloroff="#000000"
oCMenu.level[1].bgcoloron="#666666"
oCMenu.level[1].style="padding-top:2px; padding-left:5px; font-family:tahoma, arial,helvetica; font-size:10px; font-weight:normal; text-align:left;" 
oCMenu.level[1].align="bottom" 
oCMenu.level[1].offsetX=0
oCMenu.level[1].offsetY=0
oCMenu.level[1].border=1
oCMenu.level[1].bordercolor="white"
oCMenu.level[1].NS4font="tahoma,arial,helvetica"
oCMenu.level[1].NS4fontSize="1"


//Start\
//




	oCMenu.makeMenu('top2','','<%if("C1".equals(subMenuFlag)){ session.setAttribute("submf", "C1");out.print("<font class=selectedMenu>Contacts</font>"); }else{ out.print("<A class=aMenu>Contacts</A>"); }%>','','','80')
	<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/ContactAdd.jsp?&menuf=C&submf=C1";	
	%>
		oCMenu.makeMenu('sub22','top2','Add Contact ','<%=tempString%>','','105')
	<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/csvjspfiles/importmain.jsp?section=CONTACTS&menuf=C&submf=C1";	
	%>
	
		oCMenu.makeMenu('sub23','top2','Import Contacts','<%=tempString%>','','105')

	
	oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')
	oCMenu.makeMenu('top3','','<%if("C3".equals(subMenuFlag)){ session.setAttribute("submf", "C3");out.print("<font class=selectedMenu>Manage Contacts</font>"); }else{ out.print("<A class=aMenu>Manage Contacts</A>"); }%>','','','120')
	<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/ContactList.jsp?menuf=C&submf=C3&menuCheck=C3&firstTime=yes";	
	%>
	   oCMenu.makeMenu('sub24','top3','Contact List','<%=tempString%>','','115')
	<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/reports/contactmgmt/LocationContactReport.jsp?menuf=C&submf=C3&menuCheck=C3&firstTime=yes";	
	%>
		oCMenu.makeMenu('sub25','top3','Location Wise Contacts ','<%=tempString%>','','115')
		

	oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/ContactList.jsp?menuf=C&submf=C4&menuCheck=C4&firstTime=yes";	
	%>
	oCMenu.makeMenu('top4','','<%if("C4".equals(subMenuFlag)){ session.setAttribute("submf", "C4");out.print("<font class=selectedMenu>SMS</font>"); }else{ out.print("<A class=aMenu>SMS</A>"); }%>','<%=tempString%>','','25')

	
   oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')

   <%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/ContactList.jsp?menuf=C&submf=C5&menuCheck=C5&firstTime=yes";	
	%>
	oCMenu.makeMenu('top6','','<%if("C5".equals(subMenuFlag)){ session.setAttribute("submf", "C5");out.print("<font class=selectedMenu>Print Labels</font>"); }else{ out.print("<A class=aMenu>Print Labels</A>"); }%>','<%=tempString%>','','75')

	oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')
	
	
oCMenu.makeMenu('top8','','<%if("C7".equals(subMenuFlag)){ session.setAttribute("submf", "C7");out.print("<font class=selectedMenu>eMail Marketing </font>"); }else{ out.print("<A class=aMenu>eMail Marketing</A>"); }%>','','','90')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/ContactList.jsp?menuf=C&submf=C7&menuCheck=C7&firstTime=yes";	
	%>
	oCMenu.makeMenu('sub87','top8','Send Email','<%=tempString%>','','125')
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/CreateNewTemplateSetting.jsp?menuf=C&submf=C7";	
	%>
	oCMenu.makeMenu('sub81','top8','Template  Settings','<%=tempString%>','','125')
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/CreateNewMail.jsp?menuf=C&submf=C7";	
	%>
	oCMenu.makeMenu('sub82','top8','New Mail Campaign','<%=tempString%>','','125')
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/ListOfMailCompaigns.jsp?mailboxType=D&menuf=C&submf=C7";	
%>
	oCMenu.makeMenu('sub83','top8','Draft Campaigns','<%=tempString%>','','125')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/ListOfSentItems.jsp?menuf=C&submf=C7";	
%>
	oCMenu.makeMenu('sub84','top8','Sent Campaigns','<%=tempString%>','','125')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/UnSubscribeList.jsp?menuf=C&submf=C7";	
%>
	oCMenu.makeMenu('sub85','top8','Un Subscribe Link','<%=tempString%>','','125')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/ListOfMailingList.jsp?menuf=C&submf=C7";	
%>
	oCMenu.makeMenu('sub86','top8','Mailing List','<%=tempString%>','','125')
	
		oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')
oCMenu.makeMenu('top9','','<%if("C8".equals(subMenuFlag)){ session.setAttribute("submf", "C8");out.print("<font class=selectedMenu>Search </font>"); }else{ out.print("<A class=aMenu>Search</A>"); }%>','','','40')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/QuickSearchMain.jsp?menuf=C&submf=C8";	
%>
oCMenu.makeMenu('sub88','top9','Quick Search','<%=tempString%>','','90')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/contactmgmt/AdvancedSearch.jsp?menuf=C&submf=C8";	
%>
oCMenu.makeMenu('sub89','top9','Advanced Search','<%=tempString%>','','90')


oCMenu.makeMenu('break','','<A class=aMenu>|</A>','','','')

oCMenu.makeMenu('top10','','<%if("C9".equals(subMenuFlag)){ session.setAttribute("submf", "C9");out.print("<font class=selectedMenu>Reports </font>"); }else{ out.print("<A class=aMenu>Reports</A>"); }%>','','','55')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/reports/CampaignStatus.jsp?menuf=C&submf=C9";	
%>
	oCMenu.makeMenu('sub91','top10','Campaign Status','<%=tempString%>','','115')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/reports/TrackReport.jsp?menuf=C&submf=C9";	
%>
	oCMenu.makeMenu('sub92','top10','Track Report','<%=tempString%>','','115')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/reports/contactmgmt/ContactAvailable.jsp?menuf=C&submf=C9&firstTime=yes";	
%>
	oCMenu.makeMenu('sub93','top10','Available Contacts','<%=tempString%>','','115')
////by Sharad Maheshwari
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/reports/ContactsGenerated.jsp?menuf=C&submf=C9";	
%>
	oCMenu.makeMenu('sub94','top10','Contact Added','<%=tempString%>','','115')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/reports/contactmgmt/ContactReport.jsp?menuf=C&submf=C9&firstTime=yes";	
%>
oCMenu.makeMenu('sub95','top10','Configurable','<%=tempString%>','','115')
////by jatin
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/reports/contactmgmt/FollowUp.jsp?menuf=C&submf=C9&firstTime=yes";	
%>
oCMenu.makeMenu('sub96','top10','Follow Up','<%=tempString%>','','115')

<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/reports/contactmgmt/ContactsPending.jsp?menuf=C&submf=C9&firstTime=yes";	
%>
oCMenu.makeMenu('sub97','top10','Last Contact','<%=tempString%>','','115')
////by Sharad Maheshwari
<%
		tempString="";
		if(isCMFullVersion || isCMLimited) tempString="/"+domainMap+"/campaigns/reports/EmployeeContacts.jsp?menuf=C&submf=C9&firstTime=yes";	
%>
oCMenu.makeMenu('sub98','top10','Employee Contact','<%=tempString%>','','115')


//End


//Leave these two lines! Making the styles and then constructing the menu
oCMenu.makeStyle(); oCMenu.construct();

</SCRIPT>  