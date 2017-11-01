// java script

// getting the date
var today = new Date();

var dateString = today.toLocaleString();

//displaying the date
document.write(
    "Today is: " + dateString);
	
//validation of no whitespaces
function validate()
{

	var firstname= document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email=     document.getElementById("email").value;
    var message=   document.getElementById("message").value;
	
	if (firstname == "" || !isNaN(firstname)) {
        alert ("You have left \"First Name\" empty. Please enter your First name,or NA to remain anonymous.");
        return false;
    }
    if (lastname == "" || !isNaN(lastname)) {
        alert ("You have left \"Last Name\" empty. Please enter your Last name,or NA to remain anonymous.");
        return false;
    }
    if (email == "" || !isNaN(email)) {
        alert ("You have left \"E-mail Address\" empty. Please enter your E-mail address,or put NA if you do not have one. ");
        return false;
    }
    if (message == "") {
        alert ("Whoops! \n You forgot to leave a message! \nOur Customer service depends on your input! ");
        return false;
    }
}
