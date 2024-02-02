/*
   New Perspectives on HTML and CSS, 7th Edition
   This is Java Script for the Main Page
   Name : Uail Zhukenov


*/


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image-wrapper");
  
  // Move the first image to the end of the slideshow
  var firstSlide = slides[0];
  firstSlide.parentNode.removeChild(firstSlide);
  slides[slides.length - 1].parentNode.insertBefore(firstSlide, slides[0]);
  
  // Show the first three images
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "block";
  }
  
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}




// popup element
var popup = document.getElementById('popup');

// close button
var closeBtn = document.getElementById('close-btn');

// Show popup message
popup.style.display = 'block';

// Hide popup when close button is clicked
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

//subscribe button, when you click, it will transfer you to subscription section
const subscribeBtn = document.getElementById('subscribe-btn');
const boxContainer = document.querySelector('.box-container');

subscribeBtn.addEventListener('click', () => {
  boxContainer.scrollIntoView({ behavior: 'smooth' });
  subscribeBtn.style.display = 'none';
  popup.style.display = 'none';
});



