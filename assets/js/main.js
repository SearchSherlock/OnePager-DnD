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