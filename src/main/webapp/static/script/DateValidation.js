<SCRIPT LANGUAGE="JavaScript">
<!--
function LeapYear(intYear) {
	if (intYear % 100 == 0) {
	if (intYear % 400 == 0) { return true; }
	}
	else {
	if ((intYear % 4) == 0) { return true; }
	}
	return false;
}
function isValidDate(intDay, intMonth, intYear){
	
	intDay = parseInt(intDay);
	intMonth = parseInt(parseInt(intMonth)+1);
	//alert(intMonth);
	intYear = parseInt(intYear);
	if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || 
		 intMonth == 11) && (intDay > 30 || intDay < 1)) {
		alert("Specify a valid date. Maximum date should be 30 for correspnding to month you have selected");
		return false;
	}
	
	if (intMonth == 2){
		if (LeapYear(intYear) == true && intDay > 29){
			alert("Invalid date. Maximum date should be 29 for  corresponding month!");
			return false;
		}
		else if (LeapYear(intYear) != true && intDay > 28){
			alert("Invalid date. Maximum date should be 28 for  corresponding month!");
			return false;
		}
	}
	return true;
}



function getDaysInMonth(intMonth,intYear){
 daysInStartMonth=31;
 if (intMonth == 4 || intMonth == 6 || intMonth == 9 || 
		 intMonth == 11){
     daysInStartMonth = 30;
  }else if(intMonth == 1 || intMonth == 3 || intMonth == 5  
		|| intMonth == 7 ||intMonth == 8 ||intMonth == 10 || intMonth == 12){
        daysInStartMonth = 31;
  }else if(leapYear(intYear)) {
       daysInStartMonth = 29;
  }else{
     daysInStartMonth = 28;
  }
  return daysInStartMonth;
}

/**
* return true if the startdate is before end date
*/
function isStartDateBeforeEndDate(startDay, startMonth, startYear,endDay, endMonth, endYear){
 startDay = parseInt(startDay);
 startMonth = parseInt(startMonth)+1;
 startYear = parseInt(startYear);
 endDay = parseInt(endDay);
 endMonth = parseInt(endMonth)+1;
 endYear = parseInt(endYear);

 validDate =true;
 if ( startYear > endYear ){
    validDate =false;
 }else if(startYear == endYear){
    if (startMonth > endMonth){
      validDate =false;
	}else if (( startMonth == endMonth ) &&(startDay >= endDay)){
	  validDate =false;
	}
  }
  return validDate;
}

function isStartBeforeCurrent(startDay, startMonth, startYear,endDay, endMonth, endYear){
  validDate =true;
 if ( startYear > endYear ){
    validDate =false;
 }else if(startYear == endYear){
    if (startMonth > endMonth){
      validDate =false;
	}else if (( startMonth == endMonth ) &&(startDay >= endDay)){
	  validDate =false;
	}
  }
  return validDate;
}

function isStartBeforeEnd(startDay, startMonth, startYear,endDay, endMonth, endYear){
  validDate =true;
 if ( startYear > endYear ){
    validDate =false;
 }else if(startYear == endYear){
    if (startMonth > endMonth){
      validDate =false;
	}else if (( startMonth == endMonth ) &&(startDay > endDay)){
	  validDate =false;
	}
  }
  return validDate;
}
//-->
</SCRIPT>