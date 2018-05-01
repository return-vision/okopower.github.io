var	button_1 = document.querySelector('.button-1'),
	button_2 = document.querySelector('.button-2'),
	button_3 = document.querySelector('.button-3'),
	button_4 = document.querySelector('.button-4'),
	button_5 = document.querySelector('.button-5');

window.addEventListener('DOMContentLoaded', function() {
	button_1.addEventListener('click', () => {

		button_1.classList.add('active');
		button_2.classList.remove('active');
		button_3.classList.remove('active');
		button_4.classList.remove('active');
		button_5.classList.remove('active');

	});
	button_2.addEventListener('click', () => {

		button_2.classList.add('active');
		button_1.classList.remove('active');
		button_3.classList.remove('active');
		button_4.classList.remove('active');
		button_5.classList.remove('active');

	});
	button_3.addEventListener('click', () => {

		button_3.classList.add('active');
		button_1.classList.remove('active');
		button_2.classList.remove('active');
		button_4.classList.remove('active');
		button_5.classList.remove('active');

	});
	button_4.addEventListener('click', () => {

		button_4.classList.add('active');
		button_1.classList.remove('active');
		button_2.classList.remove('active');
		button_3.classList.remove('active');
		button_5.classList.remove('active');

	});
	button_5.addEventListener('click', () => {

		button_5.classList.add('active');
		button_1.classList.remove('active');
		button_2.classList.remove('active');
		button_3.classList.remove('active');
		button_4.classList.remove('active');
	});
});
