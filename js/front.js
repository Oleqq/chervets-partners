document.addEventListener('DOMContentLoaded', () => {
    const languageIcon = document.querySelector('.header__icon--language');
    const languageOptions = document.querySelector('.header__language');
    const headerWrapper = document.querySelector('.header__wrapper');


    languageIcon.addEventListener('click', () => {
        languageOptions.classList.toggle('active');
        headerWrapper.classList.toggle('active');
    });
});

document.getElementById('searchIcon').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput');
    var searchIcon = document.getElementById('searchIcon');
    var headerLogo = document.getElementById('headerIcon');
    
    headerLogo.classList.toggle('active');
    searchInput.classList.toggle('show');
    searchIcon.classList.toggle('active');
  });
  

document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu--mobile').classList.toggle('visible');
    document.querySelector('.header__burger').classList.toggle('active');
});
  

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.team-index__slider', {
      // Параметры конфигурации
      loop: true, // Бесконечный слайд
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.team-index__slider-button-next',
        prevEl: '.team-index__slider-button-prev',
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
        1280: {

        },
        1199: {

        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        676: {

        },
        567: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
      }

      // Добавьте другие параметры по мере необходимости
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-section__slider', {
      // Параметры конфигурации
      loop: true, // Бесконечный слайд
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-section__slider-button-next',
        prevEl: '.slider-section__slider-button-prev',
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
        1280: {

        },
        1199: {

        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        676: {

        },
        567: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
      }

      // Добавьте другие параметры по мере необходимости
    });
  });




document.querySelectorAll('.services-slider__card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('.services-slider__card-expanded').classList.toggle('expanded');
    });
});



  document.addEventListener('DOMContentLoaded', function () {
    // Инициализация внешнего слайдера
    var outerSlider = new Swiper('.services-slider__slider', {
        
        speed: 1000,
        navigation: {
          nextEl: '.team-index__slider-button-next',
          prevEl: '.team-index__slider-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Инициализация внутреннего слайдера
    var innerSliders = document.querySelectorAll('.services-slider__team-slider');

    innerSliders.forEach(function (slider) {
        new Swiper(slider, {
            
            slidesPerView: 7,
            spaceBetween: 10,
            navigation: {
                nextEl: '.services-slider__team-slider-button-prev',
                prevEl: '.services-slider__team-slider-button-next',
            },
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            }, 

            breakpoints: {
              2560: {
                  slidesPerView: 7,
              },
              1920: {
                  slidesPerView: 7,
              },
              1660: {
                  slidesPerView: 7,
              },
              1440: {
                  slidesPerView: 7,
              },
              1280: {
                  slidesPerView: 6,
              },
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 5,
              },
              767: {
                  slidesPerView: 4,
              },
              676: {
                  slidesPerView: 3,
              },
              567: {
                  slidesPerView: 3,
              },
              0: {
                  slidesPerView: 2,
              },
            },
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var outerSlider = new Swiper('.news__slider', {
        speed: 1000,
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 10,
        navigation: {
          nextEl: '.news__slider-button-next',
          prevEl: '.news__slider-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const photo = document.getElementById('js-photo');

    photo.addEventListener("mousemove", function(e) {
        const radius = 24; // Радиус области, в которой фотография станет цветной
        const x = e.offsetX;
        const y = e.offsetY;

        const distance = Math.sqrt(x*x + y*y); // Расстояние от курсора до центра фотографии

        if (distance < radius) {
            photo.classList.add('color'); // Добавляем класс, чтобы сделать фотографию цветной
        } else {
            photo.classList.remove('color'); // Убираем класс, чтобы вернуть фотографию в черно-белый режим
        }
    });
});