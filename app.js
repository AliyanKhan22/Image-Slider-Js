var slideIndex = 0;
var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");

function showSlide(n) {
  if (n >= slides.length) { slideIndex = 0; }
  
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex].style.display = "block";  
  setTimeout(nextSlide, 5000); // Change slide every 5 seconds
}

function nextSlide() {
  showSlide(++slideIndex);
}

showSlide(slideIndex);