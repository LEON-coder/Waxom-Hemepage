let burger = document.querySelector('.burger-menu');
burger.addEventListener('click', burgerMenu);
let navigation = document.querySelector('.nav__list');
burger.addEventListener('click', burgerMenuclose);
let burgerMenuBefore = document.querySelector(".burger-menu::before")
let burgerMenuAfter = document.querySelector(".burger-menu::after")


function burgerMenu() {
	navigation.classList.toggle('open');
	burger.classList.toggle("burger-menu--active::after");
	burger.classList.toggle("burger-menu--active::before");
}

function burgerMenuclose() {

}