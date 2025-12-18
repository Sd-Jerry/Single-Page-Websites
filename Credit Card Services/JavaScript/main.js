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

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // stop default submit

//   // Show modal
//   document.getElementById("successModal").style.display = "flex";

//   // Send form data manually to FormSubmit
//   const form = e.target;
//   const formData = new FormData(form);

//   fetch(form.action, {
//     method: "POST",
//     body: formData
//   })
//     .then(() => {
//       // After 3 seconds → close popup only (NO REDIRECT)
//       setTimeout(() => {
//         document.getElementById("successModal").style.display = "none";
//         form.reset(); // optional: clears the form after submit
//       }, 3000);
//     })
//     .catch(() => {
//       alert("Error! Please try again.");
//     });
// });

// CONTACT US FORM JS
let lastSubmitTime = 0;

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      alert("Please wait 10 seconds before submitting again.");
      return;
    }
    lastSubmitTime = now;

    document.getElementById("formLoader").style.display = "block";

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData
    })
      .then(() => {
        document.getElementById("formLoader").style.display = "none";
        document.getElementById("successModal").style.display = "flex";

        setTimeout(() => {
          document.getElementById("successModal").style.display = "none";
          contactForm.reset();
        }, 3000);
      })
      .catch(() => {
        document.getElementById("formLoader").style.display = "none";
        alert("Error! Please try again.");
      });
  });
}

// BANK-WW SECTION JS
// Government Sector Slider
const govSwiper = new Swiper('.gov-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.gov-pagination',
    clickable: true,
  },
  grabCursor: true,
});

// Private Sector Slider
const pvtSwiper = new Swiper('.pvt-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.pvt-pagination',
    clickable: true,
  },
  grabCursor: true,
});