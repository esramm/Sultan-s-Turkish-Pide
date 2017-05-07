
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Smooth scroll
// Bind this action to all "A" links
$(document).on('click', 'a', function(event){
    // Stop the browser from automatically jumping to the target
    event.preventDefault();

    // Get the offest location of the target element
    $('html, body').animate({
        // Smoothly Move To That Offset
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
