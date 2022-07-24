
let burger = document.getElementById('burger-menu');
burger.addEventListener('click', burgerMenu);
burger.addEventListener('touchend', burgerMenu);
function burgerMenu() {
var navigation = document.getElementById('class__list-nav');
navigation.classList.toggle('open');
burger.classList.toggle("burger-change"); 
burger.removeAttribute("#burger-menu"); 

} 