/*
   New Perspectives on HTML and CSS, 7th Edition
   
  This is Java Script for Toys and Accessories Page.

   Name : Uail Zhukenov
*/


// Increments Quantity function

function incrementValue(id) {
  var input = document.getElementById(id);
  input.value = Number(input.value) + 1;
}

// Decrements Quantity Function
function decrementValue(id) {
  var input = document.getElementById(id);
  if (input.value > 1) {
    input.value = Number(input.value) - 1;
  }
}

// JS for buttons, when being clicked, adds or subtracts quantity

var buttons = document.querySelectorAll('.spinner-buttons');
buttons.forEach(function(button) {
  var upButton = button.querySelector('.spinner-up');
  var downButton = button.querySelector('.spinner-down');
  var input = button.parentNode.querySelector('input[type="number"]');
  upButton.addEventListener('click', function(event) {
    event.stopPropagation();
    incrementValue(input.id);
  });
  downButton.addEventListener('click', function(event) {
    event.stopPropagation();
    decrementValue(input.id);
  });
});
