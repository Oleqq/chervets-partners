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