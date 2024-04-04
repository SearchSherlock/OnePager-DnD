document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => toggleNavMenu(navMenu));
});

function toggleNavMenu(navMenuElement) {
  navMenuElement.classList.toggle('nav-menu--open');
}

var image = document.getElementById('hero-bg-image');
new simpleParallax(image);

var image = document.getElementById('dice-bg-image');
new simpleParallax(image);

var einfSection = document.getElementById("einf-section");
var einfSectionLaser = document.getElementById("einf-laser");
var einfSectionKeyword = document.getElementById("einf-keyword");

einfSection.addEventListener("mouseenter", () => {
  einfSectionLaser.classList.add("illuminated")  
  einfSectionKeyword.classList.add("illuminated")
})

einfSection.addEventListener("mouseleave", () => {
  einfSectionLaser.classList.remove("illuminated")  
  einfSectionKeyword.classList.remove("illuminated")
})

//let index = 0; // Der aktuelle Slide
//const slides = document.querySelectorAll('.slide');
//const totalSlides = slides.length;

//document.querySelector('.prev').addEventListener('click', () => {
//    changeSlide(-1);
//});

//document.querySelector('.next').addEventListener('click', () => {
//    changeSlide(1);
//});

//function changeSlide(step) {
//    index = (index + step + totalSlides) % totalSlides;
//    document.querySelector('.slides').style.left = (-index * 100) + '%';
//}

// Automatisches Weiterschalten
//setInterval(() => {
//    changeSlide(1);
//}, 5000); // Wechselt die Slides alle 5 Sekunden
