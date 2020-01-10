
//necessary for the page to load before the scripts run
//probably will need every time
document.addEventListener("DOMContentLoaded", function(){


//all other code goes in here


//select the form
var form = document.querySelector("form");


//add an event listeners on form submit
form.addEventListener("submit", function(event) {

  //prevent the default functionality of htis FORM
  event.preventDefault();

  var firstNameInput = document.querySelector(".first-name");

  var lastNameInput = document.querySelector(".last-name");

  var firstNameValue = firstNameInput.value;

  var lastNameValue = lastNameInput.value;
  console.log(firstNameValue, lastNameValue);

  var p = document.createElement("p");
  p.innerHTML = firstNameValue + " " + lastNameValue;

  var userContainer = document.querySelector(".user-container");

  userContainer.appendChild(p);


  console.log(p);

});







});
