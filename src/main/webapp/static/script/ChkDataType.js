<SCRIPT LANGUAGE="JavaScript">

/* Funtions Available
 *--- checkBlank( textFld )
 *		Remarks:	Check for textFld value for blank  
 *					Provide Visual Effects
 *		Parameters: textFld, HTML text object
 *		Return:		void
 *------------------------------------------------------------------------------
 *
 *--- checkNumeric( textFld, response )
 *		Remarks:	Check for textFld value is int or Float  
 *					Give Error Message based on Response 
 *		Parameters: textFld, HTML text object
 *					response, Numeric, 0,1,2
 *							0 - Field = blank
 *							1 - Object Color Red
 *							2 - Alert
 *		Return:		void
 *------------------------------------------------------------------------------
 *
 *--- checkDate( obj, format, response )
 *		Remarks:	Check for textFld value is a valid date format  
 *					Give Error Message based on Response 
 *		Parameters: textFld, HTML text object
 *					format, Numeric
 *							1 - dd/mm/yyyy
 *							2 - mm/dd/yyyy
 *							3 - mm/yyyy
 *							4 - dd/mm
 *							5 - mm/dd
 *					response, Numeric, 0,1,2,3
 *							0 - Field = blank
 *							1 - System Date
 *							2 - Object Color Red
 *							3 - Alert
 *		Return:		void
 *------------------------------------------------------------------------------
 *
 *--- GetSystemDate(format)
 *		Remarks:	Returns System date based on format provided
 *		Parameters: format, Numeric
 *							1 - dd/mm/yyyy
 *							2 - mm/dd/yyyy 
 *							3 - mm/yyyy
 *							4 - dd/mm
 *							5 - mm/dd
 *							6 - yyyy
 *		Return:		date
 *------------------------------------------------------------------------------
 *
 *--- ValidateObject(object,type,format)
 *
 *		Parameters: format, Numeric
 *									1 - Blank if invalid
 *									2 - Correct if possible
 *									3 - Alert 
 *					Type, Numeric		
 *									1 - Email					 
 *							        2 - Url 
 *							 
 *		Return:		string
 *------------------------------------------------------------------------------	
 *
 *--- checkTime( obj, response )
 *		Remarks:	Check for textFld value is a valid time in 24 hrs format  
 *					Give Error Message based on Response 
 *		Parameters: textFld, HTML text object
 *					response, Numeric, 0, 1
 *							0 - Correct time
 *							1 - Alert
 *		Return:		void
 *------------------------------------------------------------------------------
 *
 *--- GetSystemTime()
 *		Remarks:	Returns System time based on 24 hrs format
 *		Parameters: none
 *		Return:		time
 *------------------------------------------------------------------------------
 *
 */ 	
 
function checkPercentage(textObj)
	{
		textObj.value=getPercentage(textObj.value);
		
	}

function getPercentage( textValue )
	{   
		var numValue;
		numValue = getNumeric(textValue);
		if(numValue<0) numValue = 0;
		if(numValue>100){
			numValue = 100;
		return numValue;
	}

function getNumeric( textValue )
	{
		var numValue;
		numValue = parseFloat(textValue);
		if(isNaN(numValue)) numValue = 0;
		return numValue;
	}

function getInteger( textValue )
	{
		var numValue;
		numValue = parseInt(textValue);
		if(isNaN(numValue)) numValue = 0;
		return numValue;
	}

function checkInteger( textFld, response )
	{
		if (textFld.readOnly) return;
		if (textFld.value != getInteger(textFld.value) )
			{
				switch (response) {
					case 2:	
							alert("Invalid number entered");
							break;
					case 1:
							textFld.style.fontStyle.fontColor = "Red";
							break;
					default:
							if(getNumeric(textFld.value) > 0) alert("decimals not permitted");
							textFld.value = 0;
					}  // select
			}
		else 
			{
				if (response==1) textFld.style.fontStyle.fontColor = "Black";
			}
	}

function checkSmallMoney( textFld, response )
	{
		if (textFld.readOnly) return;
		if (textFld.value == "" || isNaN(textFld.value) || getNumeric(textFld.value) > 200000)
			{
				switch (response) {
					case 2:	
							alert("Invalid number entered");
							break;
					case 1:
							textFld.style.fontStyle.fontColor = "Red";
							break;
					default:
							if(getNumeric(textFld.value) > 200000) alert("Maximum of 200,000 is permitted");
							textFld.value = 0;
					}  // select
			}
		else {
				if (response==1) textFld.style.fontStyle.fontColor = "Black";
			}
	}

function checkNumeric( textFld, response )
	{
		checkSmallMoney( textFld, response );
	}
	
function checkMoney( textFld, response )
	{
		if (textFld.readOnly) return;
		if (textFld.value == "" || isNaN(textFld.value) )
			{
				switch (response) {
					case 2:	
							alert("Invalid number entered");
							break;
					case 1:
							textFld.style.fontStyle.fontColor = "Red";
							break;
					default:
							textFld.value = 0;
					}  // select
			}
		else {
				if (response==1) textFld.style.fontStyle.fontColor = "Black";
			}
	}

	function checkDate( obj, format, response)
				{
					var datesring, mSep;
					var anarray;
					var mDate, mMonth, mYear, somedate;
					var nDate, nMonth, nYear, somedate;

					if (obj.readOnly) return;
					datestring = obj.value;

					if ( datestring.indexOf("/") > 0 ) mSep = "/";
						else if ( datestring.indexOf("-") > 0 ) mSep = "-";
							else if ( datestring.indexOf(".") > 0 ) mSep = ".";
								else {  
										datecheckResponse( obj, format, response, 1 );
										return;
									}
									
					anarray = datestring.split(mSep);
					if ( (anarray.length  < 3 && format < 3) || (anarray.length < 2) )
						{
							datecheckResponse( obj, format, response, 1 );
							return;
						}

					switch (format) {
						case 5:				// mm/dd
									mMonth = anarray[0];
									mDate = anarray[1];
									mYear = "2003";
									break;
						case 4:				// dd/mm
									mDate = anarray[0];
									mMonth = anarray[1];
									mYear = "2003";
									break;
						case 3:				// mm/yyyy
									mDate = "01";
									mMonth = anarray[0];
									mYear = anarray[1];
									break;
						case 2:				// mm/dd/yyyy
									mMonth = anarray[0];
									mDate = anarray[1];
									mYear = anarray[2];
									break;
						default:			// dd/mm/yyyy
									mDate = anarray[0];
									mMonth = anarray[1];
									mYear = anarray[2];
						}
			nDate = Math.max(1,Math.min(31,mDate));
			nMonth = Math.max(1,Math.min(12,mMonth));
			nYear  = Math.max(1,Math.min(2999,mYear));
			somedate = new Date( nYear, nMonth-1, nDate);
			if( (mDate != nDate) || (mMonth != nMonth) || (mYear != nYear) || (mDate != somedate.getDate() ) || ( mMonth != somedate.getMonth()+1 ) || ( mYear != somedate.getFullYear()) )
					datecheckResponse( obj, format, response, 1 );
				else datecheckResponse( obj, format, response, 0 );
	}
				
function datecheckResponse( textFld, format, response, error  )
	{
		if (error == 1) {
					switch (response) {
					case 3:	
							{
							alert("Invalid Date entered");
							textFld.focus;
							break;
							}
					case 2:	
							{
							textFld.style.color = "Red";
							break;
							}
					case 1:
							{
							textFld.value = GetSystemDate(format);
							break;
							}
					default:
							{
							textFld.value = "";
							}
					}  // select
			}
		else {
				if (response==2)textFld.style.color = "Black";
			}
	}

				
	function GetSystemDate(format)
		{
			var SysDate = new Date();
			var strDate;

			Sep = "/";
			switch (format) {
				case 6:				// yyyy
						strDate = SysDate.getFullYear();
						break;
				case 5:				// mm/dd
						strDate = (SysDate.getMonth()+1) + Sep + SysDate.getDate();
						break;
				case 4:				// dd/mm
						strDate = SysDate.getDate() + Sep + (SysDate.getMonth()+1);
						break;
				case 3:				// mm/yyyy
						strDate = (SysDate.getMonth()+1) + Sep + SysDate.getFullYear();
						break;
				case 2:				// mm/dd/yyyy
						strDate = (SysDate.getMonth()+1) + Sep + SysDate.getDate() + Sep + SysDate.getFullYear();
						break;
				default:			// dd/mm/yyyy
						strDate = SysDate.getDate() + Sep + (SysDate.getMonth()+1) + Sep + SysDate.getFullYear();
				}
			return strDate;
		}
		
function StringToDate(datestring, format)
	{
		var datestring, mSep = "\\";
		var anarray;
		var somedate = new Date();

		if ( datestring.indexOf("/") > 0 ) mSep = "/";
			else if ( datestring.indexOf("-") > 0 ) mSep = "-";
				else if ( datestring.indexOf(".") > 0 ) mSep = ".";
		
		anarray = datestring.split(mSep);
		switch (format) {
			case 5:				// mm/dd
						if(anarray.length>0) somedate.setMonth( getNumeric(anarray[0])-1 );
						if(anarray.length>1) somedate.setDate( getNumeric(anarray[1]) );
						break;
			case 4:				// dd/mm
						if(anarray.length>0) somedate.setDate( getNumeric(anarray[0]) );
						if(anarray.length>1) somedate.setMonth( getNumeric(anarray[1])-1 );
						break;
			case 3:				// mm/yyyy
						somedate.setDate( 1 );
						if(anarray.length>0) somedate.setMonth( getNumeric(anarray[0])-1 );
						if(anarray.length>1) somedate.setFullYear( getNumeric(anarray[1]) );
						break;
			case 2:				// mm/dd/yyyy
						if(anarray.length>0) somedate.setMonth( getNumeric(anarray[0])-1 );
						if(anarray.length>1) somedate.setDate( getNumeric(anarray[1]) );
						if(anarray.length>2) somedate.setFullYear( getNumeric(anarray[2]) );
						break;
			default:			// dd/mm/yyyy
						if(anarray.length>0) somedate.setDate( getNumeric(anarray[0]) );
						if(anarray.length>1) somedate.setMonth( getNumeric(anarray[1])-1 );
						if(anarray.length>2) somedate.setFullYear( getNumeric(anarray[2]) );
			}
		return somedate;
	}
				
function compareDate(dt1,dt2,format)
	{
		var actdate, nowdate ;
		  
		jDate1 = StringToDate( dt1, format);
		jDate2 = StringToDate( dt2, format);
		//alert(jDate1 + ' versus ' + jDate2 + ' = '+ jDate1 < jDate2);
		if(jDate1 < jDate2) return -1;
			else if(jDate1 > jDate2) return 1;
					else return 0
	}

function getCMonth(intMonth)
	{
		return getCMonthFull(intMonth).substring(0,3);
	}

function getCMonthFull(intMonth)
	{
		switch (intMonth) {
			case 2:		return "February";
						break;
			case 3:		return "March";
						break;
			case 4:		return "April";
						break;
			case 5:		return "May";
						break;
			case 6:		return "June";
						break;
			case 7:		return "July";
						break;
			case 8:		return "August";
						break;
			case 9:		return "September";
						break;
			case 10:	return "October";
						break;
			case 11:	return "November";
						break;
			case 12:	return "December";
						break;
			default:	return "January";
						break;
			}
	}



function GetSystemTime()
	{
		var SysDate = new Date();
		return SysDate.getHours() + ':' + ( (SysDate.getMinutes() < 10) ? '0' : '') + SysDate.getMinutes();
	}


function IsBlank(str)
	{
		var str;
		var regexp=/ /g;
		str = str.replace( regexp,"");
		if(str!="") return false;
		else return true;
	}			
 
function checkBlank(obj)
	{
		
		if(IsBlank(obj.value)) 
			obj.style.backgroundColor = "lightyellow";
		else
			obj.style.backgroundColor = "white";
	}

 function checkBlank(obj,dfault)
	{
		if(IsBlank(obj.value)) 
			obj.value=dfault;
	}
	
 	
 function roundfloat(dblValue, intDecimal)
	{
		var divideBy;
		divideBy=1;
		var RVal;
		RVal=dblValue;
		var i;
		for (i=0;i<intDecimal;i++)
		{
			RVal=RVal * 10	
			divideBy=divideBy*10;
		}
		RVal=parseInt(RVal )
		return RVal / divideBy;
	}			
 

function valid(element, check) 
	{
		if (element.type == 'text' || element.type == 'textarea') 
		{
			return(check(element.value));
		}
 		else 
			return '';
	}		

	

//-->
</SCRIPT>