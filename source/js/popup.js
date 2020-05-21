
  var submit = document.querySelector('.form__submit');
  var popup = document.querySelector('.popup__success');
  var popuperror = document.querySelector('.popup__error');
  var close = document.querySelector ('.popup__error-button');
  var close_s = document.querySelector ('.popup__success-button');

  var last_name = document.querySelector("[name=last-name]");
  var first_name = document.querySelector("[name=first-name]");
  var email = document.querySelector("[name=email-address]");

  document.addEventListener("submit", function (evt) {
    if (!last_name.value || !first_name.value || !email.value) {
      evt.preventDefault();
      popuperror.classList.add("show-e");
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popuperror.classList.remove("show-e");
  });

  document.addEventListener("submit", function (evt) {
      evt.preventDefault();
      popup.classList.add("show");
  });

  close_s.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show");
  });

