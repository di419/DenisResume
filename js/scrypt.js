"use strict";


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Меню бургер

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLanguage = document.querySelector('.menu__language');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuLanguage.classList.toggle('_active');
    });
}

// Прокрутка к разделу

const menuLink = document.querySelectorAll('.menu__link[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", goToSection);
    });

    function goToSection(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuBody.classList.remove('_active');
                menuLanguage.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Инициализируем Swiper

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    simulateTouch: false,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    slidesReView: 1,

    spaceBetween: 30,
});