// form modal popup
 
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".section-link.ask");
    const form = document.querySelector(".form-secondary");
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    document.body.appendChild(backdrop);

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            form.classList.add("active");
            backdrop.classList.add("active");
            document.documentElement.classList.add("fixed"); // Добавляем класс fixed к html
            form.scrollIntoView({ behavior: "smooth" }); // Прокручиваем к верху формы
        });
    });

    function closeForm() {
        form.classList.remove("active");
        backdrop.classList.remove("active");
        document.documentElement.classList.remove("fixed"); // Удаляем класс fixed с html
    }

    backdrop.addEventListener("click", closeForm);

    const closeButton = document.querySelector(".form-secondary__close");
    if (closeButton) {
        closeButton.addEventListener("click", closeForm);
    }
});



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












// скрипты страницы insights

// скрипт поп апа на странице insights 
document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы с классом 'insights-card__link' и 'insights-card__info'
    const links = document.querySelectorAll(".insights-card__link, .insights-card__info");
    const form = document.querySelector(".form");
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    document.body.appendChild(backdrop);

    // Функция для открытия формы
    function openForm(event) {
        event.preventDefault();
        form.classList.add("active");
        backdrop.classList.add("active");
        form.scrollIntoView({ behavior: "smooth" }); // Прокрутка к верху формы
        document.documentElement.classList.add("fixed"); // Запрет прокрутки страницы
    }

    // Добавляем обработчики событий для открытия формы
    links.forEach((link) => {
        link.addEventListener("click", openForm);
    });

    // Функция для закрытия формы
    function closeForm() {
        form.classList.remove("active");
        backdrop.classList.remove("active");
        document.documentElement.classList.remove("fixed"); // Восстановление прокрутки страницы
    }

    // Добавляем обработчик события для закрытия формы при клике на backdrop
    backdrop.addEventListener("click", closeForm);

    // Добавляем обработчик события для кнопки закрытия формы
    const closeButton = document.querySelector(".form__close");
    if (closeButton) {
        closeButton.addEventListener("click", closeForm);
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











document.addEventListener("DOMContentLoaded", function () {
	// Функция для инициализации Swiper

		const swiper = new Swiper('.company-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1000,
		navigation: {
			nextEl: ".company-slider-button-next",
			prevEl: ".company-slider-button-prev",
		},

		});
	
});



document.addEventListener("DOMContentLoaded", function () {
	// Функция для инициализации Swiper

		const swiper = new Swiper('.post-slider', {
		slidesPerView: 1,
		spaceBetween: 540,
		speed: 1000,
		navigation: {
			nextEl: ".post-slider-button-next",
			prevEl: ".post-slider-button-prev",
		},

		});
	
});


// post.html
document.querySelectorAll('.post-block__block').forEach(block => {
	block.addEventListener('click', function() {
		// Сначала убираем классы со всех блоков
		document.querySelectorAll('.post-block.active').forEach(activeBlock => {
			activeBlock.classList.remove('active');
			activeBlock.querySelector('.post-block__block-info').classList.remove('expanded');
		});

		// Добавляем классы к текущему блоку и его инфо
		const parentBlock = this.closest('.post-block');
		parentBlock.classList.add('active');
		parentBlock.querySelector('.post-block__block-info').classList.add('expanded');
	});
});
document.addEventListener("DOMContentLoaded", function() {
    const members = document.querySelectorAll('.member');
    
    members.forEach((member, index) => {
      const memberImgClass = `member-img-${index + 1}`;
      
      member.addEventListener('mouseover', function() {
        const memberImg = document.querySelector(`.${memberImgClass}`);
        if (memberImg) {
          memberImg.style.opacity = 1;
        }
      });

      member.addEventListener('mouseout', function() {
        const memberImg = document.querySelector(`.${memberImgClass}`);
        if (memberImg) {
          memberImg.style.opacity = 0;
        }
      });
    });
  });
  $(document).ready(function () {
    $(".scroll-text").mCustomScrollbar({
      axis: "y",
      theme: "minimal",
      autoHideScrollbar: false,
      alwaysShowScrollbar: 2,
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
	var titles = document.querySelectorAll('.member-hero__achievements-item-title');
	
	titles.forEach(function(title) {
	  title.addEventListener('click', function() {
		var content = this.nextElementSibling;
		content.classList.toggle('active');
		this.classList.toggle('expanded');
	  });
	});
  });
  // about-us.htmk
  document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.environment-slider', {
		slidesPerView: 2, // Один слайд на просмотр
		speed: 1000,
		loop: true, // Бесконечный слайд
		navigation: {
			nextEl: '.environment-slider-button-next',
			prevEl: '.environment-slider-button-prev',
		},
		breakpoints: {
			2560: {
				slidesPerView: 2,
			},
			1440: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 2,
			},
			1099: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			567: {
				slidesPerView: 1,                    
			},
			467: {
				slidesPerView: 1.3,
			},
			0: {
				slidesPerView: 1.3,
			},
		},

	});
});
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.rewards-slider', {
        slidesPerView: 5, 
        
        speed: 1000,
        loop: false, // Без бесконечного слайда

        navigation: {
            nextEl: '.rewards-slider-button-next',
            prevEl: '.rewards-slider-button-prev',
        },
        breakpoints: {
          2560: {
            spaceBetween: 20,
            slidesPerView: 5, 
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 5, 
          },
          991: {
            spaceBetween: 20,
            slidesPerView: 5, 
          },
          767: {
            spaceBetween: 20,
            slidesPerView: 3, 
          },
          567: {
            spaceBetween: 20,
            slidesPerView: 3, 
          },
          0: {
            spaceBetween: 20,
            slidesPerView: 2.5, 
          },
        },
        
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.rewards-slider.mobile', {
        slidesPerView: 1, 
        
        speed: 1000,
        loop: false, // Без бесконечного слайда

        navigation: {
            nextEl: '.rewards-slider-button-next',
            prevEl: '.rewards-slider-button-prev',
        },
        breakpoints: {
          2560: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
          991: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
          767: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
          567: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
          0: {
            spaceBetween: 20,
            slidesPerView: 1, 
          },
        },
        
    });
});
//company-2.html
$(document).ready(function() {
    if ($(window).width() <= 567) {
        $('.scroll-text.mobile').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            autoHideScrollbar: true, // Автоматическое скрытие скроллбара
            scrollbarPosition: "inside", // Размещение скроллбара внутри контейнера
            autoExpandScrollbar: true // Автоматическое расширение скроллбара при наведении курсора
        });
    }
});


$(document).ready(function() {
    $('.scroll-text.desktop').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            autoHideScrollbar: false,
            alwaysShowScrollbar: 2,
            
          });    
      
  });
document.addEventListener("DOMContentLoaded", function () {
    const galleryLinks = document.querySelectorAll("[data-fancybox='gallery']");
    const indicatorsContainer = document.querySelector('.indicators');


    galleryLinks.forEach((link, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }


        indicator.addEventListener('click', () => {
            Fancybox.show(galleryLinks, {
                startIndex: index,
                on: {
                    reveal: (fancybox, slide) => {
                        indicators.forEach((indicator, idx) => {
                            indicator.classList.toggle('active', idx === slide.index);
                        });
                    }
                }
            });
        });

        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    Fancybox.bind("[data-fancybox='gallery']", {
        on: {
            reveal: (fancybox, slide) => {
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === slide.index);
                });
            }
        }
    }
);
}),

// company.html

$(document).ready(function() {
	if ($(window).width() <= 567) {
		$('.scroll-text.mobile').mCustomScrollbar({
		  axis: "y",
		  theme: "minimal",
		  autoHideScrollbar: false,
		  alwaysShowScrollbar: 2,
		  
		});
	}
});
$(document).ready(function() {
    $('.scroll-text.desktop').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            autoHideScrollbar: false,
            alwaysShowScrollbar: 2,
            
          });    
      
});



// environment.html
document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.environment-slider', {
		slidesPerView: 2, // Один слайд на просмотр
		speed: 1000,
		loop: true, // Бесконечный слайд
		navigation: {
			nextEl: '.environment-slider-button-next',
			prevEl: '.environment-slider-button-prev',
		},
		breakpoints: {
			2560: {
				slidesPerView: 2,
			},
			1440: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 2,
			},
			1099: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			567: {
				slidesPerView: 1,                    
			},
			467: {
				slidesPerView: 1.3,
			},
			0: {
				slidesPerView: 1.3,
			},
		},

	});
});

// member.html

$(document).ready(function () {
	$(".scroll-text").mCustomScrollbar({
		axis: "y",
		theme: "minimal",
		autoHideScrollbar: false,
		alwaysShowScrollbar: 2,
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var titles = document.querySelectorAll('.member-hero__achievements-item-title');
	
	titles.forEach(function(title) {
		title.addEventListener('click', function() {
			// Убираем классы 'active' и 'expanded' у всех элементов
			titles.forEach(function(otherTitle) {
				var otherContent = otherTitle.nextElementSibling;
				otherContent.classList.remove('active');
				otherTitle.classList.remove('expanded');
				otherTitle.parentElement.classList.remove('active'); // Убираем класс 'active' у родителя
			});

			// Добавляем классы 'active' и 'expanded' к выбранному элементу
			var content = this.nextElementSibling;
			content.classList.toggle('active');
			this.classList.toggle('expanded');
			this.parentElement.classList.toggle('active'); // Добавляем класс 'active' к родителю
		});
	});
});



// news.html
document.addEventListener('DOMContentLoaded', function() {

	// Функция для инициализации Swiper
function initSwiper() {
    var swiper = new Swiper('.news-tabs__slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: true, // Включаем режим свободного перемещения
      // любые другие настройки Swiper
    });
  }

  // Функция для проверки размера экрана и инициализации Swiper при необходимости
  function checkScreenSize() {
    if (window.innerWidth < 991) {
      if (!document.querySelector('.news-tabs__slider').classList.contains('swiper-initialized')) {
        initSwiper();
      }
    }
  }

  // Проверка размера экрана при загрузке страницы
  window.addEventListener('load', checkScreenSize);

  // Проверка размера экрана при изменении размеров окна
  window.addEventListener('resize', checkScreenSize);
});

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".news-tabs__tab");
    const sliders = document.querySelectorAll(".news__slider");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function() {
        tabs.forEach(t => t.classList.remove("active")); // Убираем класс active у всех табов
        sliders.forEach(s => s.classList.remove("active")); // Убираем класс active у всех слайдеров

        this.classList.add("active"); // Добавляем класс active к текущему табу
        sliders[index].classList.add("active"); // Добавляем класс active к соответствующему слайдеру
      });
    });
  });

  $(document).ready(function() {
	$('#date-select').select2({
		placeholder: "Выберите дату",
		allowClear: true,
		minimumResultsForSearch: Infinity // Убирает поле поиска
	});

	$('#date-tab').on('click', function() {
		$('#date-select').select2('open');
	});

	$('#date-select').on('select2:open', function() {
		$('.select2-dropdown').css('display', 'block');
	});

	$('#date-select').on('select2:close', function() {
		$('.select2-dropdown').css('display', 'none');
	});
});


// search.html



// social-justice

document.addEventListener("DOMContentLoaded", function () {
    const socialJusticeSwiper = new Swiper('.social-justice__slider', {
        slidesPerView: 1,
        spaceBetween: 12,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.social-justice-slider-button-next',
            prevEl: '.social-justice-slider-button-prev',
        },
        breakpoints: {
            2560: {
                spaceBetween: 12,
            },
            1440: {
                spaceBetween: 12,
            },
            1280: {
                spaceBetween: 12,
            },
            991: {
                spaceBetween: 12,
            },
            0: {
                spaceBetween: 12,
            },
        }
    });
});

// скрипт который считает кол-во символов в блокас с текстом
document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом 'company-info__text'
    const elements = document.querySelectorAll('.company-info__text');

    // Проходим по каждому элементу с классом 'company-info__text'
    elements.forEach(function(element) {
        // Получаем все элементы <p> внутри текущего элемента
        const paragraphs = element.querySelectorAll('p');
        
        // Проверяем каждый элемент <p>
        paragraphs.forEach(function(paragraph) {
            // Если длина текста внутри элемента <p> больше 50 символов или высота больше 140 пикселей
            if (paragraph.textContent.length > 500 || paragraph.offsetHeight > 140) {
                // Добавляем класс 'scroll-text' к элементу 'company-info__text'
                element.classList.add('scroll-text');
            }
        });
    });
});


