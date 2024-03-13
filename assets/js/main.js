// JavaScript Document
document.getElementById('menuToggle').addEventListener('click', function() {
  var menu = document.getElementById('menuItems');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
