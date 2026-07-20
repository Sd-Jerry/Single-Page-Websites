// ---- Navbar ----
const header = document.getElementById("site-header");
const hamburger = document.getElementById("navHamburger");
const drawer = document.getElementById("navDrawer");
const backdrop = document.getElementById("navBackdrop");

function handleScroll() {
    header.classList.toggle("nav-scrolled", window.scrollY > 50);
    header.classList.toggle("nav-top", window.scrollY <= 50);
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

function openDrawer() { drawer.classList.add("open"); backdrop.classList.add("open"); hamburger.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeDrawer() { drawer.classList.remove("open"); backdrop.classList.remove("open"); hamburger.classList.remove("open"); document.body.style.overflow = ""; }
hamburger.addEventListener("click", () => drawer.classList.contains("open") ? closeDrawer() : openDrawer());
backdrop.addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer-link,.drawer-cta").forEach(l => l.addEventListener("click", closeDrawer));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

// ---- Review Filter ----
const rfBtns = document.querySelectorAll(".rf-btn");
const rvCards = document.querySelectorAll(".rv-card");

rfBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        rfBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.rf;
        rvCards.forEach(card => {
            const cat = card.dataset.rv;
            if (filter === "all" || cat === filter) {
                card.style.opacity = "1";
                card.style.transform = "";
                card.style.display = "";
            } else {
                card.style.opacity = "0.2";
                card.style.transform = "scale(0.97)";
            }
        });
    });
});

// ---- Star Rating Selector ----
const stars = document.querySelectorAll(".wr-star");
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
        const val = parseInt(star.dataset.val);
        stars.forEach((s, i) => s.classList.toggle("active", i < val));
    });
    star.addEventListener("mouseleave", () => {
        stars.forEach((s, i) => s.classList.toggle("active", i < selectedRating));
    });
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.val);
        stars.forEach((s, i) => s.classList.toggle("active", i < selectedRating));
    });
});

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const siblings = [...entry.target.parentElement.children];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add("revealed"), idx * 80);
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

// ---- Submit review (demo toast) ----
document.querySelector(".wr-submit").addEventListener("click", function () {
    if (selectedRating === 0) {
        alert("Please select a star rating before submitting.");
        return;
    }
    this.textContent = "✓ Thank You! Review Submitted";
    this.style.background = "linear-gradient(135deg,#2e7d32,#1b5e20)";
    setTimeout(() => {
        this.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Review';
        this.style.background = "";
    }, 3000);
});