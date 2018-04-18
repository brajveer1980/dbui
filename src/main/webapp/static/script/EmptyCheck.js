<SCRIPT LANGUAGE="JavaScript">
<!--
function isEmpty(theField)
{
	if (theField.value.length==0)
	{
		return true
	}
		return false
}

/*This function validates many fields at a time and shows the list of required fields as an alert.For calling this function pass the text field and and a corresponding string for displaying in alert. For example if you want validates 2 form fields function call will like [ isEmptyAll(this.form.text1,'name',this.form.text2,'Age')] */

function isEmptyAll()
{
	var emptyFlag=false
	var msg="The Following fields are required."
	var len=arguments.length
	for (var i=0;i<len ; i=i+2)
	{
		if (isEmpty(arguments[i]))
		{
			msg=msg+"\n * "+arguments[i+1]
			if(!emptyFlag)
			{
				arguments[i].focus();
			}
			emptyFlag=true
		}
		
		
	}
	if(emptyFlag)
	{
		alert(msg)
	}
	return emptyFlag;
}


function isBig(theField,maxSize)
{
	var str=theField.value;
	
	if(str.length > maxSize)
	{
		alert("You can not enter more than "+maxSize+" character in this field");
		theField.focus();
		return false;
	}
	else
	{    
		return true;
	}
}

//-->
</SCRIPT>