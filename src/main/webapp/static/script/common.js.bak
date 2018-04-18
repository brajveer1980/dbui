/*
*Checked for delete
*/
 function testCheked(theForm,message)
{
	var len=theForm.elements.length;
	var flag=false;
	var IdList="";
	for(var i=0; i<len ; i++)
	{
		if(theForm.elements[i].type=="checkbox")
		{
			if(theForm.elements[i].checked==true)
			{
				IdList=IdList+theForm.elements[i].name+"\n ";
				flag=true;
				return true;
			}
		}
	}
	if(!flag)
	{
		alert("Select at least one  "+message);
		return false;
	}
	
	
}