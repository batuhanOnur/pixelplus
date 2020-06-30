/* Mobile Menu*/
let menu = document.querySelector('.menu-btn');
let hamburgerMenu = document.querySelector('.mobile-links');
let menuOpen = false;

/* mobile menu and animation*/
menu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    if (!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menu.classList.remove('open');
        menuOpen = false;
    }
})



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}


