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
  pagination: {
    el: ".mySwiperHome .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiperHome .swiper-button-next",
    prevEl: ".mySwiperHome .swiper-button-prev",
  },
});

// SERVICES Section Swiper
var swiperServices = new Swiper(".mySwiperServices", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  freeMode: true,
  navigation: {
    nextEl: ".mySwiperServices .swiper-button-next",
    prevEl: ".mySwiperServices .swiper-button-prev",
  },
  pagination: {
    el: ".mySwiperServices .swiper-pagination",
    clickable: true,
  },
});

// TESTINOMAL Section Swiper
const swiper = new Swiper(".mySwiperTestinomal", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});