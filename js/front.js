document.addEventListener("DOMContentLoaded", () => {
	const languageIcon = document.querySelector(".header__icon--language");
	const languageOptions = document.querySelector(".header__language");
	const headerWrapper = document.querySelector(".header__wrapper");

	languageIcon.addEventListener("click", () => {
		languageOptions.classList.toggle("active");
		headerWrapper.classList.toggle("active");
	});
});

document.getElementById("searchIcon").addEventListener("click", function () {
	var searchInput = document.getElementById("searchInput");
	var searchIcon = document.getElementById("searchIcon");
	var headerLogo = document.getElementById("headerIcon");

	headerLogo.classList.toggle("active");
	searchInput.classList.toggle("show");
	searchIcon.classList.toggle("active");
});

document.querySelector(".header__burger").addEventListener("click", function () {
	document.querySelector(".header__menu--mobile").classList.toggle("visible");
	document.querySelector(".header__burger").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".team-index__slider", {
		// Параметры конфигурации
		loop: true, // Бесконечный слайд
		slidesPerView: 4,
		speed: 1000,
		spaceBetween: 12,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".team-index__slider-button-next",
			prevEl: ".team-index__slider-button-prev",
		},

		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1660: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
				loop: false, // Бесконечный слайд
			},
			767: {
				slidesPerView: 2,
				loop: true, // Бесконечный слайд
			},
			567: {
				slidesPerView: 1.3,
				loop: true, // Бесконечный слайд
			},
			0: {
				slidesPerView: 1.3,
			},
		},

		// Добавьте другие параметры по мере необходимости
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".slider-section__slider", {
		// Параметры конфигурации
		loop: true, // Бесконечный слайд
		slidesPerView: 4,
		speed: 1000,
		spaceBetween: 12,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".slider-section__slider-button-next",
			prevEl: ".slider-section__slider-button-prev",
		},

		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1660: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			567: {
				slidesPerView: 1.3,
			},
			0: {
				slidesPerView: 1.3,
			},
		},

		// Добавьте другие параметры по мере необходимости
	});
});

document.querySelectorAll(".services-slider__card-header").forEach((card) => {
	card.addEventListener("click", () => {
		parentCard = card.closest(".services-slider__card");
		parentCard.querySelector(".services-slider__card-expanded").classList.toggle("expanded");
		parentCard.classList.toggle("active");
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Инициализация внешнего слайдера
	var outerSlider = new Swiper(".services-slider__slider", {
		speed: 1000,
        spaceBetween: 500,
		simulateTouch: false,
		navigation: {
			nextEl: ".team-index__slider-button-next",
			prevEl: ".team-index__slider-button-prev",
		},
	});

	

	// Инициализация внутреннего слайдера
	var innerSlidersParams = {
		watchOverflow: true,
		// loop: true,
		touchReleaseOnEdges: true,
		slidesPerView: 7,
		spaceBetween: 10,
        simulateTouch: false,
        autoHeight: true,
		navigation: {
			nextEl: ".services-slider__team-slider-button-next",
			prevEl: ".services-slider__team-slider-button-prev",
		},
		// pagination: {
		//     el: slider.querySelector('.swiper-pagination'),
		//     clickable: true,
		// },

		breakpoints: {
			2560: {
				slidesPerView: 6,
			},
			1920: {
				slidesPerView: 6,
			},
			1660: {
				slidesPerView: 6,
			},
			1440: {
				slidesPerView: 6,
			},
			1280: {
				slidesPerView: 6,
			},
			1199: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 3,
			},
			676: {
				slidesPerView: 3.2,
			},
			567: {
				slidesPerView: 3.2,
			},
			0: {
				slidesPerView: 2.2,
			},
		},
	};
	var innerSliders = document.querySelectorAll(".services-slider__team-slider");
	console.log(innerSliders);

	for (let i = 0; i < innerSliders.length; i++) {
		console.log(i);
		innerSliders[i].classList.add("services-slider__team-slider--" + i);
		innerSliders[i].closest('.services-slider__service').querySelector(".services-slider__team-slider-button-prev").classList.add("services-slider__team-slider-button-prev--" + i);
		innerSliders[i].closest('.services-slider__service').querySelector(".services-slider__team-slider-button-next").classList.add("services-slider__team-slider-button-next--" + i);
		innerSlidersParams.navigation.nextEl = ".services-slider__team-slider-button-next--" + i;
		console.log(innerSlidersParams.navigation.nextEl);
		innerSlidersParams.navigation.prevEl = ".services-slider__team-slider-button-prev--" + i;
		console.log(innerSlidersParams.navigation.prevEl);
		new Swiper(innerSliders[i], innerSlidersParams);
	}


	var memberSlider = new Swiper(".member-hero__slider", {
		speed: 1000,
        spaceBetween: 500,
		simulateTouch: false,
		navigation: {
			nextEl: ".member-hero__slider-button-next",
			prevEl: ".member-hero__slider-button-prev",
		},
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var outerSlider = new Swiper(".news__slider", {
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".news__slider-button-next",
			prevEl: ".news__slider-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});

// document.addEventListener("DOMContentLoaded", function() {
//     const photo = document.getElementById('js-photo');

//     photo.addEventListener("mousemove", function(e) {
//         const radius = 24; // Радиус области, в которой фотография станет цветной
//         const x = e.offsetX;
//         const y = e.offsetY;

//         const distance = Math.sqrt(x*x + y*y); // Расстояние от курсора до центра фотографии

//         if (distance < radius) {
//             photo.classList.add('color'); // Добавляем класс, чтобы сделать фотографию цветной
//         } else {
//             photo.classList.remove('color'); // Убираем класс, чтобы вернуть фотографию в черно-белый режим
//         }
//     });
// });
