// SWIPER.JS
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    breakpoints: {
        300: {
            mousewheel: true,
            keyboard: true,
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 24,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 56,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 56,
            allowSlidePrev: true,
            allowSlideNext: true
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 28,
            allowSlidePrev: false,
            allowSlideNext: false
        }
    }
});

// SCROLL ON TOP
function scrolltop() {
    let b = window.document;
    b = location.href = '#home';
}

// AOS ANIMATION
AOS.init();