//checks if a project and the date has been selected
function checkifselected()
{ 
  var result = true;
  var day, d;
  if (document.frm.userlist_date.value == "")
  {
     result = false;
     alert("Please select the date");
     document.frm.userlist_date.focus();
  }
  return result;
}

//checks that the selected date for the start of the week falls on a Monday
function checkifmonday(date)
{
  var result = true;
  var testday, dayoftheweek, intday, intmonth, intyear, strdate;
  strdate = date.value;
  dayoftheweek = -1;
  intday = parseInt((strdate.substr(0,2)),10);
  intmonth = parseInt((strdate.substr(3,2)),10);
  intyear = parseInt((strdate.substr(6,4)),10);
  testday = new Date(intyear,intmonth-1,intday);    
  dayoftheweek = testday.getDay();
  if (dayoftheweek != 1)
  {
     var strday;
     result = false;
     if (dayoftheweek == 0)
     strday = "Sunday";
     else if (dayoftheweek == 2)
     strday = "Tuesday";
     else if (dayoftheweek == 3)
     strday = "Wednesday";
     else if (dayoftheweek == 4)
     strday = "Thursday";
     else if (dayoftheweek == 5)
     strday = "Friday";
     else if (dayoftheweek == 6)
     strday = "Saturday";
     alert("The day selected is a " + strday + ".\nPlease select a day that falls on a Monday." );
     date.focus();
  }
  return result;
}
  

function checkinput()
{	
  var result = true;
  result = checkifselected() && 
           checkifmonday(document.frm.userlist_date);
  if (result == true)
  {
    document.frm.action="../RG_new_registration.htm";
    document.frm.submit();
  }
}