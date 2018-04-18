function punctuateAll(frm) // accepts the form name as parameter
{
	var form = eval("document." + frm);
	for(var formElem=0;form.elements[formElem]!=null;formElem++)
	{
		if(form.elements[formElem].type=="text")
		{
			var value = form.elements[formElem].value;
			if(value.indexOf(".")>-1)
			{
				var len = (value.substring(0,value.indexOf("."))).length;
				if(len>3)
				{
					var decimal = value.substr(value.indexOf("."),3);
					value = value.substr(0,value.indexOf("."));
					var newValue = "";
					for(var valCheck = value.length, pos = 1; valCheck>3; valCheck = valCheck-3)
					{
						newValue = "," + value.substr(value.length - pos*3,3) + newValue;
						pos++;
					}
					
					newValue = value.substr(0,value.length - (pos-1)*3) + newValue + decimal;
					form.elements[formElem].value = newValue;
				}
			}
			else
			{
				var len = value.length;
				if(len>3)
				{
					var newValue = "";
					for(var valCheck = value.length, pos = 1; valCheck>3; valCheck = valCheck-3)
					{
						newValue = "," + value.substr(value.length - pos*3,3) + newValue;
						pos++;
					}
					
					newValue = value.substr(0,value.length - (pos-1)*3) + newValue;
					form.elements[formElem].value = newValue;
				}
			}
		}
	}
}

function punctuate(textValue) // accepts a value as parameter
{
	var value = textValue;
	if(value.indexOf(".")>-1)
	{
		var len = (value.substring(0,value.indexOf("."))).length;
		if(len>3)
		{
			var decimal = value.substr(value.indexOf("."),3);
			value = value.substr(0,value.indexOf("."));
			var newValue = "";
			for(var valCheck = value.length, pos = 1; valCheck>3; valCheck = valCheck-3)
			{
				newValue = "," + value.substr(value.length - pos*3,3) + newValue;
				pos++;
			}

			newValue = value.substr(0,value.length - (pos-1)*3) + newValue + decimal;
			return newValue;
		}
	}
	else
	{
		var len = value.length;
		if(len>3)
		{
			var newValue = "";
			for(var valCheck = value.length, pos = 1; valCheck>3; valCheck = valCheck-3)
			{
				newValue = "," + value.substr(value.length - pos*3,3) + newValue;
				pos++;
			}

			newValue = value.substr(0,value.length - (pos-1)*3) + newValue;
			return newValue;
		}
	}

	return value;
}

function unpunctuateAll(frm) // accepts the form name as parameter
{
	var form = eval("document." + frm);
	for(var formElem=0;form.elements[formElem]!=null;formElem++)
	{
		if(form.elements[formElem].type=="text")
		{
			var value = form.elements[formElem].value;
			for(;value.indexOf(",")>-1;)
			{
				value = value.substring(0,value.indexOf(",")) + value.substring(value.indexOf(",")+1,value.length);
				//alert(value);
			}
			form.elements[formElem].value = value;
		}
	}
}

function unpunctuate(textValue) // accepts a value as parameter
{
	var value = textValue;
	for(;value.indexOf(",")>-1;)
	{
		value = value.substring(0,value.indexOf(",")) + value.substring(value.indexOf(",")+1,value.length);
		//alert(value);
	}
	return value;
}

function convertDouble(me2) // accepts the field object as parameter
{
	var value = me2.value;
	var indexOfDot = value.indexOf(".")
	if(indexOfDot>=0)
	{
		if((value.substr(indexOfDot,value.length-indexOfDot-1)).length>2)
		{
			value = value.substr(0,indexOfDot)+value.substr(indexOfDot,3);
			//alert(value);
		}
		else
		{
			if((value.substr(indexOfDot,value.length-indexOfDot-1)).length==0)
			{
				value = value.substr(0,indexOfDot+1)+"00";
			}
			if((value.substr(indexOfDot,value.length-indexOfDot-1)).length==1)
			{
				value = value.substr(0,indexOfDot+2)+"0";
			}
		}
	}
	else
	{
		value = value + ".00";
	}

	me2.value = value;
}