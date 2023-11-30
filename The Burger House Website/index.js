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
});

// SCROLL ON TOP
function scrolltop() {
    let b = window.document;
    b = location.href = '#home';
}

// AOS ANIMATION
AOS.init();