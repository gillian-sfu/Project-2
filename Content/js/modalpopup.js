//USED https://www.w3schools.com/howto/howto_css_modals.asp FOR MODAL JAVASCRIPT CODES + TO LEARN-->


'use strict'; /*something about making clean script so that it won't break*/

/*ensure that its working*/
console.log('JavaScript is running.');

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("review-click");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}