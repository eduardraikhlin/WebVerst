const burger = document.querySelector('.burger-popover_menu');
const cross = document.querySelector('#burger-menu_button');
const popover = document.querySelector('.burger-popover_close');

function toggleMenu() {
	burger.classList.toggle('hidden');
}

cross.addEventListener('click', toggleMenu);
popover.addEventListener('click', toggleMenu);