var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 1500, // <<< Increase speed to slow down the fade (default is 300ms)
    autoplay: {
        delay: 4000, // Time between slides
        disableOnInteraction: false,
    },
});

