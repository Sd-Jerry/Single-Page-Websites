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

// WHY CHOOSE US — scroll-triggered card reveal
const wcuCards = document.querySelectorAll(".wcu-card");

const wcuObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Staggered delay per card
        setTimeout(() => {
          entry.target.classList.add("wcu-visible");
        }, i * 100);
        wcuObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

wcuCards.forEach((card) => wcuObserver.observe(card));

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