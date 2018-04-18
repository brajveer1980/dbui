<%
boolean testFlag=true;
String tempString="";

boolean isProductFullVersion =true;
 boolean isProductLimited=true;
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




	oCMenu.makeMenu('top2','','<%if("A2".equals(subMenuFlag)){ session.setAttribute("submf", "A2");out.print("<font class=selectedMenu>Sales Call</font>"); }else{ out.print("<A class=aMenu>Sales Call</A>"); }%>','','','80')

	<%tempString="";
			if(isProductFullVersion  || isProductLimited)
	tempString="/"+"domainMap"+"/customer/CustomerSearchforDiary.jsp?requestFor=salescall&firstTime=yes&menuf=A&submf=A2";	%>
	oCMenu.makeMenu('sub22','top2','Download CSV','<%=tempString%>','','105')
	
	<%tempString="";
			if(isProductFullVersion  || isProductLimited)
tempString="/"+"domainMap"+"/salescall/ListSalesCall.jsp?menuf=A&submf=A2";	%>
		oCMenu.makeMenu('sub23','top2','Upload CSV','<%=tempString%>','','105')

	









		
	
	
		


//End


//Leave these two lines! Making the styles and then constructing the menu
oCMenu.makeStyle(); oCMenu.construct();

</SCRIPT>  