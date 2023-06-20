const buttonOpen = document.querySelector('#header__button--open');
const buttonClose = document.querySelector('#header__button--close');

const navigationMenu = document.querySelector('#header__nav');
const navigationLinks = document.querySelectorAll('.header__list--item');

function toggleNavigation() {
  navigationMenu.classList.toggle('header__nav--active');
}

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    toggleNavigation();
  });
});

buttonOpen.addEventListener('click', () => {
  toggleNavigation();
});

buttonClose.addEventListener('click', () => {
  toggleNavigation();
});
