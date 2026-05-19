// F A Q Section JS
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');

      // Close all open items
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open the clicked item if it was closed
      if (!wasActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      }
    });
  });
});

// TESTIMONIAL SECTION
const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 16,
  speed: 500,
  centeredSlides: true,
  grabCursor: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },

  breakpoints: {

    // Mobile & Tablet (up to 923px) — HORIZONTAL
    0: {
      direction: "horizontal",
      slidesPerView: 1.15,
      spaceBetween: 16,
      centeredSlides: true,
    },

    // Desktop (924px+) — VERTICAL
    924: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },

  },
});

// SCROLL ON TOP
function scrolltop() {
  let b = window.document;
  b = location.href = '#sticky-h';
}

// Whatsapp.sticky Delay Js
window.addEventListener('load', () => {
    setTimeout(() => {
        const waButton = document.querySelector('.whatsapp-sticky');
        waButton.classList.add('show');
    }, 3000); // 3000ms = 3 seconds delay
});