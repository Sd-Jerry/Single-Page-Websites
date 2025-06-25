// HOME Section Swiper
var swiperHome = new Swiper(".mySwiperHome", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// SERVICES Section Swiper
var swiperServices = new Swiper(".mySwiperServices", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 24,
  freeMode: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

