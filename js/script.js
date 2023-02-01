const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const progress = document.querySelectorAll('.skill__progress-counter'),
		lines = document.querySelectorAll('.skill__progress-line span');

progress.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});