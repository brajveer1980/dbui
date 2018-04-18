<SCRIPT LANGUAGE="JavaScript">
<!--
/* Trim function  used for removing the spaces from begining and end of all non-empty textfield and text area of entire  document irrespective  forms. Prefred to call this method at first of each validation functions. This function calls the Trim() method described next .This method doesn't return anything*/

function getTrimed()
{
	var formNo=document.forms.length;

	for (j=0;j<formNo;j++)
	{

		var max = document.forms[j].elements.length;
		for(var i=0; i< max; i++)
		{
			if (document.forms[j].elements[i].type =="textarea" || document.forms[j].elements[i].type =="text")
			{
				trim(document.forms[j].elements[i]);
			}
			
		}
	}
}
/* This method is for removing the white spaces from the begining and end of a given Object . Doesn't return anything */
<!--Pass the input objet reference-->
function trim(item) {
  var tmp = "";
  var item_length = item.value.length;
  var item_length_minus_1 = item.value.length - 1;
  for (index = 0; index < item_length; index++){
    if (item.value.charAt(index) != ' '){
		tmp += item.value.charAt(index);
     }else {
      if (tmp.length > 0){
        if (item.value.charAt(index+1) != ' ' && index != item_length_minus_1){
			tmp += item.value.charAt(index);
        }
      }
    }
  }
	item.value = tmp;
}
//-->

function checkDuplicatesNames(formName,message)
{
	var max = formName.elements.length;
	for(var i=0; i< max; i++)
	{
		var currElement = formName.elements[i];
		if (currElement.type =="text")
		{
			if(currElement.value!="" )
			{
				trim(currElement);
		  for(var j=i+1; j< max; j++)
		  {
			var nextElement = formName.elements[j];
			if (nextElement.type =="text")
			{
			  trim(currElement);
              if(currElement.value == nextElement.value){
			    alert(message);
                nextElement.focus();
				return false;
			  }
			}// end of inner(nextElement.type =="text")
    	 }// end of iner for loop
		}// end of if	
	 }// end of if	
   }// end of out for
	return true;
}// end of function



</SCRIPT>