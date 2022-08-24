
let burger = document.querySelector('.burger-menu');
burger.addEventListener('click', burgerMenu);
let navigation = document.querySelector('.nav__list');
burger.addEventListener('click', burgerMenuclose);


function burgerMenu() {
navigation.classList.toggle('open');
burger.classList.toggle("active--burger");
} 