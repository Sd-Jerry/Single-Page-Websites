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
  spaceBetween: 24,
  freeMode: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});


// Our services List
// 1- wedding planning
// 2- corporate gathering
// 3- Social events
// 4- Promotional activity/Branding
// 5- Musical events and live stage shows 
// 6- photography and cinematography
// 7- cultural events
// 8- Birthday parties
// 9- Celebrity management
// 10- Exhibtion/ Trade show

