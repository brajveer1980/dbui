<SCRIPT LANGUAGE="JavaScript">
<!--
/* Checking Integer */

function isInterger(theValue)
{
	
	pat=/\D/
	if (pat.test(theValue))
	{
		return false
	}
		return true;
}

function isInteger(theValue)
{	
	return isInterger(theValue);
}
/* Checking double-->  */ 

function isDouble(TheNumber)
{
	var valid = true
	var GoodChars = "0123456789."
	var i = 0
			if (TheNumber==".")return false;
	ary=TheNumber.split(".")
	if ((ary!=null)&&(ary.length>2)) return false;

	for (i =0; i <= TheNumber.length -1; i++) 
	{
		if (GoodChars.indexOf(TheNumber.charAt(i)) == -1)
		{
			return false;
		} 
	} 
	return true
}


function isAlphaNumericWithSpace(theString)
{
	pat=/[^A-Za-z 0-9]/
	return (!(pat.test(theString)))
	
}

/*     This function checks whether the passed string is a alpha numeric or not. returns fale if it is not an alphanumeric */

function isAlphaNumeric(theString)
{
	pat=/\W/
	if(pat.test(theString))
	{
		
		return false
	}
	return true
}

/*  This function checks whether passed string is valid phone number or not */ 

function CheckPhoneNumber(TheNumber)
{
	var valid = true
	var GoodChars = "0123456789()-+,/ "
	var i = 0
	
	for (i =0; i <= TheNumber.length -1; i++) 
	{
		if (GoodChars.indexOf(TheNumber.charAt(i)) == -1)
		{
			valid = false
		} 
	} 
	return valid
}

function isDoubleAll()
{
	var emptyFlag=false
	var msg="Only decimal numbers are valid in the following fields"
	var len=arguments.length
	for (var i=0;i<len ; i=i+2)
	{
		if (!isDouble(arguments[i].value))
		{
			if(!emptyFlag)
			{
				arguments[i].focus()
			}
			msg=msg+"\n * "+arguments[i+1]
			emptyFlag=true
		}
		
		
	}
	if(emptyFlag)
	{
		alert(msg)
	}
	return emptyFlag;
}

function formatNumber(num)
{
	
	var result=num;
	var separator='.';
	var etx;
	var i;
	var intNum,afterDecimal;
	if (num.length>0)
	{
		i= num.indexOf(separator);
		if (i == -1)
		{
			return result+".00";
			
		}
		afterDecimal = num.substring(i+separator.length,num.length);
		intNum= num.substring(0,i);
		
		if ((intNum.length>0)&&(afterDecimal.length>1))
		{
			etx=afterDecimal.substring(0,2);
			
			result=intNum+"."+etx;
			
		}
		if((intNum.length>0)&&(afterDecimal.length==1))
		{
		result=intNum+"."+afterDecimal+"0";
		
		}
		else if(afterDecimal.length==1)
		{
		result="0.00";
		
		}
	}
	
return result;

}

function format_number(pnumber,decimals) 
{  
  if (isNaN(pnumber)) { return 0};  
  if (pnumber=='') { return 0};  
   
  var IsNegative=(parseInt(pnumber)<0); 
  if(IsNegative)pnumber=-pnumber; 

  var snum = new String(pnumber);  
  var sec = snum.split('.');  
  var whole = parseInt(sec[0]);  
  var result = '';  
  if(sec.length > 1){  
    var dec = new String(sec[1]);  
    dec = parseInt(dec)/Math.pow(10,parseInt(dec.length-decimals-1)); 
Math.round(dec); 
dec = parseInt(dec)/10; 

if(IsNegative) 
{ 
  var x = 0-dec; 
      x = Math.round(x); 
  dec = - x; 
} 
else 
{ 
      dec = Math.round(dec); 
} 

/* 
 * If the number was rounded up from 9 to 10, and it was for 1 'decimal' 
 * then we need to add 1 to the 'whole' and set the dec to 0. 
 */ 
if(dec==Math.pow(10, parseInt(decimals)))
{ 
  whole+=1; 
  dec="0"; 
} 

    dec = String(whole) + "." + String(dec);  
    var dot = dec.indexOf('.');  
    if(dot == -1){  
      dec += '.';  
      dot = dec.indexOf('.');  
    } 
var l=parseInt(dot)+parseInt(decimals); 
    while(dec.length <= l) { dec += '0'; }  
    result = dec;  
  } else{  
    var dot;  
    var dec = new String(whole);  
    dec += '.';  
    dot = dec.indexOf('.');  
var l=parseInt(dot)+parseInt(decimals); 
    while(dec.length <= l) { dec += '0'; }  
    result = dec;  
  }  
  if(IsNegative)result="-"+result; 
  return result;  
}  

//-->
</SCRIPT>