// Navbar scroll
const header = document.getElementById("site-header");
function handleScroll() {
    header.classList.toggle("nav-scrolled", window.scrollY > 50);
    header.classList.toggle("nav-top", window.scrollY <= 50);
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

// Hamburger
const hamburger = document.getElementById("navHamburger");
const drawer = document.getElementById("navDrawer");
const backdrop = document.getElementById("navBackdrop");

function openDrawer() { drawer.classList.add("open"); backdrop.classList.add("open"); hamburger.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeDrawer() { drawer.classList.remove("open"); backdrop.classList.remove("open"); hamburger.classList.remove("open"); document.body.style.overflow = ""; }

hamburger.addEventListener("click", () => drawer.classList.contains("open") ? closeDrawer() : openDrawer());
backdrop.addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer-link, .drawer-cta").forEach(l => l.addEventListener("click", closeDrawer));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

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