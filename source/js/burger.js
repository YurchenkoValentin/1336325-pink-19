var nav = document.querySelector('.main-nav');
var close = document.querySelector('.main-nav__close-icon');
var open = document.querySelector('.main-nav__burger-icon');

close.onclick = function() {
  nav.classList.toggle('active');
};

open.onclick = function() {
  nav.classList.toggle('active');
};


