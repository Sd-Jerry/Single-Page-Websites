// ---- NAVBAR — BL Events ----
const siteHeader = document.getElementById("site-header");
const hamburger = document.getElementById("navHamburger");
const drawer = document.getElementById("navDrawer");
const backdrop = document.getElementById("navBackdrop");
const drawerLinks = document.querySelectorAll(".drawer-link, .drawer-cta");
const navLinks = document.querySelectorAll(".nav-link");

// 1. Transparent / scrolled state
function handleNavScroll() {
  if (window.scrollY > 50) {
    siteHeader.classList.add("nav-scrolled");
    siteHeader.classList.remove("nav-top");
  } else {
    siteHeader.classList.add("nav-top");
    siteHeader.classList.remove("nav-scrolled");
  }
}

window.addEventListener("scroll", handleNavScroll, { passive: true });
handleNavScroll(); // run on load

// 2. Hamburger toggle
function openDrawer() {
  drawer.classList.add("open");
  backdrop.classList.add("open");
  hamburger.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  hamburger.classList.remove("open");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  drawer.classList.contains("open") ? closeDrawer() : openDrawer();
});

backdrop.addEventListener("click", closeDrawer);

// Close drawer when a link is clicked
drawerLinks.forEach(link => {
  link.addEventListener("click", closeDrawer);
});

// 3. Active link on scroll (IntersectionObserver)
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active from all
        navLinks.forEach(l => l.classList.remove("active"));
        // Add active to matching nav link
        const id = entry.target.getAttribute("id");
        const matching = document.querySelector(`.nav-link[href="#${id}"]`);
        if (matching) matching.classList.add("active");
      }
    });
  },
  {
    threshold: 0.35,
    rootMargin: "-80px 0px 0px 0px",
  }
);

sections.forEach(section => sectionObserver.observe(section));

// 4. Close drawer on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

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

// EVENT Section
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("showreel-video");
  const eventsSection = document.getElementById("events");

  // Configuration for when to trigger the video
  const observerOptions = {
    root: null, // Watch the browser screen viewport
    rootMargin: "0px",
    threshold: 0.3 // 0.3 means play as soon as 30% of the #events section rolls onto the screen
  };

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Play the video when the section comes into view
        video.play().catch(error => {
          // If a browser still blocks it, this prevents your script from crashing
          console.log("Autoplay context: interaction required or muted missing.", error);
        });
      } else {
        // Optional: Pause the video if they scroll past it to save user CPU/Battery
        video.pause();
      }
    });
  };

  // Initialize the observer
  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  // Safely check if elements exist before observing
  if (eventsSection && video) {
    observer.observe(eventsSection);
  }
});

// BLOG SECTION — scroll-triggered card reveal
const blogCards = document.querySelectorAll(".blog-card");

const blogObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("blog-visible");
        }, i * 90);
        blogObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

blogCards.forEach((card) => blogObserver.observe(card));