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