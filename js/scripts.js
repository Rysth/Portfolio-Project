const buttonMenu = document.querySelector("#header__button");
const buttonImage = document.querySelector("#header__button--image");

const navigationMenu = document.querySelector("#header__nav");
const navigationLinks = document.querySelectorAll(".header__list--item");

const navigationIcons = ["../images/icons/burguer.svg", "../images/icons/x-icon.svg"];

function changeButtonIcon(path) {
	buttonImage.src = path;
}

function toggleNavigation() {
	navigationMenu.classList.toggle("header__nav--active");
}
