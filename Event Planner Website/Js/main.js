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

// TESTIMONIALS Section Swiper
var swiperTesti = new Swiper(".mySwiperTesti", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".mySwiperTesti .swiper-button-next",
    prevEl: ".mySwiperTesti .swiper-button-prev",
  },
  pagination: {
    el: ".mySwiperTesti .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});