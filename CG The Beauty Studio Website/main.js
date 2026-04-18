// F A Q Section JS
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  // 1. Accordion Toggle Functionality
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Check if the clicked item is already active
      const wasActive = item.classList.contains('active');

      // Close all open FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          // Reset max-height on the answer element to ensure smooth collapse
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });

      // If the item was not already active, open it
      if (!wasActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        // Set max-height to the scrollHeight to allow CSS transition to work
        // Use a defined height if scrollHeight is unreliable, but this is usually better.
        answer.style.maxHeight = answer.scrollHeight + 30 + "px";
        // Adding extra 30px to account for padding inside .active .faq-answer
      }
    });
  });
});

// TESTIMONIAL SECTION

// const swiper = new Swiper(".testimonialSwiper", {
//   direction: "vertical",
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 20,

//   centeredSlides: true,

//   speed: 600,

//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//   },

//   grabCursor: true,

//   touchRatio: 1,
//   touchAngle: 45,
//   simulateTouch: true,

//   mousewheel: {
//     forceToAxis: true,
//     sensitivity: 1,
//   },

//   resistanceRatio: 0.85,
//   threshold: 5,
// });

const swiper = new Swiper(".testimonialSwiper", {
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  centeredSlides: true,
  slideToClickedSlide: true,

  speed: 500,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  grabCursor: true,

  // ✅ Snap behavior
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },

  touchRatio: 1,
  threshold: 5,
});