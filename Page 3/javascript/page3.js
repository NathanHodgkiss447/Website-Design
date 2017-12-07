
function validateForm()
{
var x=document.forms["myForm"]["email"].value;
var y=document.forms["myForm"]["comment"].value;
if (x==null || x=="" || y==null || y=="")
	{
	alert("Both feilds must be filled!");
	return false;
	}
	else
	{
		document.write("Thank you for the feedback!");
	}
}
