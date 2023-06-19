const buttonMenu = document.querySelector("#header__button");
const buttonImage = document.querySelector("#header__button--image");

const navigationMenu = document.querySelector("#header__nav");
const navigationLinks = document.querySelectorAll(".header__list--item");

const navigationIcons = ["../images/icons/burguer.svg", "../images/icons/x-icon.svg"];
navigationLinks.forEach((element) => {
	element.addEventListener("click", () => {
		toggleNavigation();
		changeButtonIcon(navigationIcons[0]);
		buttonMenu.style.width = "initial";
	});
});

buttonMenu.addEventListener("click", () => {
	const actualButtonIcon = buttonImage.src;

	if (actualButtonIcon.includes("burguer")) {
		changeButtonIcon(navigationIcons[1]);
		buttonMenu.style.width = "12px";
	} else {
		changeButtonIcon(navigationIcons[0]);
		buttonMenu.style.width = "initial";
	}
	toggleNavigation();
});

function changeButtonIcon(path) {
	buttonImage.src = path;
}

function toggleNavigation() {
	navigationMenu.classList.toggle("header__nav--active");
}
