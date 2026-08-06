// ---- Scroll progress bar ----
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((window.scrollY / total) * 100) + "%";
}, { passive: true });

// ---- Scroll to top ----
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---- Auto year ----
document.getElementById("tcYear").textContent = new Date().getFullYear();

// ---- Active TOC link on scroll ----
const sections = document.querySelectorAll(".tc-section");
const tocLinks = document.querySelectorAll(".tc-toc-link");
const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            tocLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
}, { threshold: 0.35, rootMargin: "-80px 0px 0px 0px" });
sections.forEach(s => sectionObs.observe(s));

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));