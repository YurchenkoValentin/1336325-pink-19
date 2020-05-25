var nav = document.querySelector('.main-nav');
var close = document.querySelector('.main-nav__close-icon');
var open = document.querySelector('.main-nav__burger-icon');

document.querySelector('.main-nav').classList.add('main-nav--show');

open.onclick = function() {
  nav.classList.remove('main-nav--show');
  nav.classList.add('main-nav--hide');
};

close.onclick = function() {
  nav.classList.remove('main-nav--hide');
  nav.classList.add('main-nav--show');
};

