// java script

// getting the date
var today = new Date();

var dateString = today.toLocaleString();

//displaying the date
document.write(
    "Today is: " + dateString);
//**************************************************************************************
	
//validation of no whitespaces
function validate()
	{

		var firstname= document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
		var email=     document.getElementById("email").value;
		var message=   document.getElementById("message").value;
	
		if (firstname == "") {
			alert ("You have left \"First Name\" empty. Please enter your First name,or NA to remain anonymous.");
			return false;
		}
		if (lastname == "") {
			alert ("You have left \"Last Name\" empty. Please enter your Last name,or NA to remain anonymous.");
			return false;
		}
		if (email == "") {
			alert ("You have left \"E-mail Address\" empty. Please enter your E-mail address,or put NA if you do not have one. ");
			return false;
		}
		if (message == "") {
			alert ("Whoops! \n You forgot to leave a message! \nOur Customer service depends on your input! ");
			return false;
    }
}
//selecting the form to validate
	document.getElementById("contactusform").onsubmit = validate;
	
//***********************************************************************************************************
//drop menu stuff

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//*****************************************************************************************
// slideshow stuff

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}