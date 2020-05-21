var nav = document.querySelector('.main-nav');
var close = document.querySelector('.main-nav__close-icon');
var open = document.querySelector('.main-nav__burger-icon');

close.onclick = function() {
  nav.classList.toggle('active');
};

open.onclick = function() {
  nav.classList.toggle('active');
};

var submit = document.querySelector('.form__submit');
var popup = document.querySelector('.popup');
var close = document.querySelector ('.popup__button');

submit.onclick = function() {
  popup.classList.toggle('active');
};

close.onclick = function() {
  popup.classList.toggle('active');
};
