// swiper-JS For Home Page
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

const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
    card.addEventListener('click', function (e) {
        // Prevent nested card click from toggling multiple times
        e.stopPropagation();

        // Flip back any other flipped card
        cards.forEach(c => {
            if (c !== this) c.classList.remove('flipped');
        });

        // Toggle this card
        this.classList.toggle('flipped');
    });
});

// Optional: click outside to close any open cards
document.addEventListener('click', function () {
    cards.forEach(card => card.classList.remove('flipped'));
});

// SCROLL ON TOP
function scrolltop() {
    let b = window.document;
    b = location.href = '#home';
}