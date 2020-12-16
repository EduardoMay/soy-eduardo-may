const btn = document.getElementById('send');

btn.addEventListener('click', (_) => {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	const messageWa = `Nombre: *${name}*; Email: *${email}*; Mensaje: ${message}`;

	const url = `https://wa.me/529981362079?text=${messageWa}`;

	window.open(url, '_blank');
});

const openMenuBtn = document.getElementById('btn-open');

openMenuBtn.addEventListener('click', (_) => {
	switchViewMenu();
});

function smoothScrollMenu() {
	if (screen.width < 768) {
		const itemLink = document.querySelectorAll('.nav__link');

		itemLink.forEach((item) => {
			item.addEventListener('click', scrollToElement);
		});
	}
}

function scrollToElement(e) {
	e.preventDefault();
	switchViewMenu();

	const labelText = e.target.attributes['target-nav'].value;
	const positionTop = document
		.querySelector(`#${labelText}`)
		.getBoundingClientRect().top;

	document.querySelector('body, html').scroll({
		top: positionTop + scrollY - 60,
		behavior: 'smooth',
	});
}

function switchViewMenu() {
	document.querySelector('.nav__items').classList.toggle('active');
	document.querySelector('main').classList.toggle('nav-active');
	document.querySelector('html').classList.toggle('no-scroll');
	document.querySelector('body').classList.toggle('no-scroll');
}

window.addEventListener('resize', () => {
	if (screen.width < 768) smoothScrollMenu();

	if (screen.width > 768) {
		const itemLink = document.querySelectorAll('.nav__link');

		itemLink.forEach((item) => {
			item.removeEventListener('click', scrollToElement);
		});
	}
});

window.addEventListener('DOMContentLoaded', () => {
	if (screen.width < 768) smoothScrollMenu();

	if (screen.width > 768) {
		const itemLink = document.querySelectorAll('.nav__link');

		itemLink.forEach((item) => {
			item.removeEventListener('click', scrollToElement);
		});
	}
});

window.addEventListener('scroll', (_) => {
	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 0);
});
