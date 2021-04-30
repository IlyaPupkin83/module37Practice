const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

let currentSlide = 0;

// переход к слайду n
function goToSlide(n) {
	slides[currentSlide].className = 'slide';
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].className = 'slide showing';
}

// обработчик событий
function setupListners() {
	next.onclick = function () {
		goToSlide(currentSlide + 1);
	}
	previous.onclick = function () {
		goToSlide(currentSlide - 1);
	}
}

// показывает кнопки для навигации
function showButtons() {
	for (var i = 0; i < controls.length; i++) {
		controls[i].style.display = 'inline-block';
	}
}

// инициализация
function sliderInit() {
	if (slides.length !== 0) {
		setupListners();
		showButtons();
	}
}

module.exports = sliderInit;