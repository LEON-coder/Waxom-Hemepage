
let burger = document.querySelector('.burger-menu');
burger.addEventListener('click', burgerMenu);
let navigation = document.querySelector('.nav__list');

function burgerMenu() {
navigation.classList.toggle('open');
burger.classList.toggle("active");
} 





