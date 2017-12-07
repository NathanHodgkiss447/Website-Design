function validateForm()
{
var x=document.forms["myForm"]["email"].value;
var y=document.forms["myForm"]["comment"].value;
if (x==null || x=="" || y==null || y=="")
	{
	alert("First name must be filled out");
	return false;
	}
	else
	{
	document.write("Thank you for the feedback!");
	}
}
