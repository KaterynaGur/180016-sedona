var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__menu-toggle');

navMain.classList.add('main-nav--close');
navToggle.classList.add('page-header__menu-toggle--js');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__menu-toggle--close');
    navToggle.classList.add('page-header__menu-toggle--opened');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__menu-toggle--opened');
    navToggle.classList.add('page-header__menu-toggle--close');
    }
});
