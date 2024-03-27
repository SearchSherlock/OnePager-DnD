document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => toggleNavMenu(navMenu));
});

function toggleNavMenu(navMenuElement) {
  navMenuElement.classList.toggle('nav-menu--open');
}

document.addEventListener('DOMContentLoaded', function () {
  var parallaxElements = document.querySelectorAll('.parallax');
  var speed = 0.5;

  window.addEventListener('scroll', function () {
    var offset = window.pageYOffset;

    parallaxElements.forEach(function (elem) {
      elem.style.backgroundPositionY = offset * speed + "px";
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var parallaxElements = document.querySelectorAll('.parllay');
  var speed = 0.1;

  window.addEventListener('scroll', function () {
    var offset = window.pageYOffset;

    parallaxElements.forEach(function (elem) {
      elem.style.backgroundPositionY = offset * speed + "px";
    });
  });
});