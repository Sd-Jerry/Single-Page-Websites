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
const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 20,
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

    // 📱 MOBILE (Horizontal)
    0: {
      direction: "horizontal",
      slidesPerView: 1.2,
    },

    // 💻 TABLET + DESKTOP (Vertical)
    768: {
      direction: "vertical",
      slidesPerView: 3,
    }
  }
});

<section id="about-section">
            <h1>About Care & Glow</h1>
            <div class="about-container">
                <!-- Image -->
                <div class="about-image">
                    <img src="./Imgs/abtus-img.webp" alt="Facial Massage">
                </div>

                <!-- Content -->
                <div class="about-content">
                    <h2>Premium Beauty Care, Delivered to Your Comfort</h2>
                    <p>
                        Based in Rajkot, Gujarat, Care & Glow – The Beauty Studio has been delivering professional
                        beauty services for over 5 years. From waxing, facials, and hair styling to bridal and side
                        makeup, we ensure top-quality results using branded products with the highest hygiene standards.
                        Enjoy the convenience of free home service on large bookings, with easy appointment scheduling
                        through WhatsApp or our contact form.
                    </p>
                    <p>
                        ✨ “Because You Deserve the Best Care, Always.”.
                    </p>
                    <button class="button-5" role="button">More About Us</button>
                </div>
            </div>
        </section>

        #about-section {
  padding: 50px 5%;
  background: var(--salmon);
}

#about-section h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 35px;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 800;
  letter-spacing: 0.01em;
}

.about-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
}

/* Image */
.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

/* Content */
.about-content {
  position: relative;
  left: -60px;
  flex: 1;
  padding: 50px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.about-content h2 {
  font-size: clamp(24px, 3vw, 36px);
  margin-bottom: 20px;
  font-family: 'Cormorant Garamond', serif;
}

.about-content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

/* Button */
.about-content .button-5 {
  background: #1a1a1a;
  border: 2px solid #1a1a1a;
}

.about-content .button-5:hover {
  background: transparent;
  color: #1a1a1a;
}