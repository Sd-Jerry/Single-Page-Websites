// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const siblings = [...entry.target.parentElement.children];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add("revealed"), idx * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ---- Scroll to top ----
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));