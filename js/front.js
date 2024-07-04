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












// скрипты страницы insights

// скрипт поп апа на странице insights 
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".insights-card__link");
    const form = document.querySelector(".form");
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    document.body.appendChild(backdrop);

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            form.classList.add("active");
            backdrop.classList.add("active");
        });
    });

    backdrop.addEventListener("click", function () {
        form.classList.remove("active");
        backdrop.classList.remove("active");
    });

    // Find existing close button and add click event
    const closeButton = document.querySelector(".form__close");
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            form.classList.remove("active");
            backdrop.classList.remove("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox='gallery']", {
        // Ваши параметры Fancybox, если они нужны
    });
});

var swiper = new Swiper(".insights-slider", {
    slidesPerView: 1,
    spaceBetween: 1000,
    speed: 1000,

    navigation: {
        nextEl: ".insights-slider-button-next",
        prevEl: ".insights-slider-button-prev",
    },
});
// Функция для инициализации Swiper
function initSwiper() {
    var swiper = new Swiper(".insights-filters__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true, // Включаем режим свободного перемещения
        // любые другие настройки Swiper
    });
}

// Функция для проверки размера экрана и инициализации Swiper при необходимости
function checkScreenSize() {
    if (window.innerWidth < 991) {
        if (!document.querySelector(".insights-filters__slider").classList.contains("swiper-initialized")) {
            initSwiper();
        }
    }
}

// Проверка размера экрана при загрузке страницы
window.addEventListener("load", checkScreenSize);

// Проверка размера экрана при изменении размеров окна
window.addEventListener("resize", checkScreenSize);

$(document).ready(function () {
    // При клике на кнопку фильтра
    $(".insights-filters__tab").click(function () {
        // Скрываем все выпадающие списки
        $(".insights-filters__dropdown").removeClass("active");
        // Получаем значение атрибута data-filter
        var filter = $(this).attr("data-filter");
        // Находим соответствующий выпадающий список по ID и показываем его
        $("#" + filter + "-dropdown").addClass("active");
    });

    // Инициализация Select2 для выпадающих списков
    $(".insights-filters__tab-dropdown").select2({
        minimumResultsForSearch: -1, // Отключает поле поиска
        dropdownCssClass: "no-search-arrow", // Добавляет класс для стилизации
    });

    // Ограничение текста до 30 символов с добавлением "..."
    function truncateText() {
        $(".select2-selection__rendered").each(function () {
            var text = $(this).text();
            if (text.length > 30) {
                var truncated = text.substring(0, 30) + "...";
                $(this).text(truncated);
            }
        });
    }

    // Применение truncateText после изменения выбора
    $(".insights-filters__tab-dropdown").on("select2:select", function (e) {
        truncateText();
    });

    // Применение truncateText при загрузке
    truncateText();
});



// скрипты страницы сontacts
// скрипт поп апа на странице сontacts 



