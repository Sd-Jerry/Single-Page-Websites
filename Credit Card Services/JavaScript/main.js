// Services Section JS
const cards = document.querySelectorAll(".benefit-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px, #1c1c1c, #121212)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "#2a284e";
    });
});

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

// TESTIMONIALS SECTION JS
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    speed: 800,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 2600,
        disableOnInteraction: false,
    },

    breakpoints: {
        1400: { slidesPerView: 4 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1.3 },
        0: { slidesPerView: 1 }
    }
});

