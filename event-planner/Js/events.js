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

// ---- Filter Tabs ----
const filterBtns = document.querySelectorAll(".filter-btn");
const evCards = document.querySelectorAll(".ev-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        evCards.forEach(card => {
            const cat = card.dataset.category;
            if (filter === "all" || cat === filter) {
                card.style.opacity = "1";
                card.style.transform = "";
                card.style.display = "";
            } else {
                card.style.opacity = "0.2";
                card.style.transform = "scale(0.96)";
            }
        });
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

// ---- Showreel autoplay on scroll ----
const showreelWrapper = document.getElementById("showreelWrapper");
const iframe = document.getElementById("showreelIframe");
let playerReady = false;

const videoObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!playerReady) return;
        const src = iframe.src;
        if (entry.isIntersecting) {
            iframe.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}', "*"
            );
        } else {
            iframe.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}', "*"
            );
        }
    });
}, { threshold: 0.4 });

if (showreelWrapper) {
    videoObs.observe(showreelWrapper);
    // Update iframe to enable JS API
    const currentSrc = iframe.src;
    if (!currentSrc.includes("enablejsapi")) {
        iframe.src = currentSrc + "&enablejsapi=1";
    }
    setTimeout(() => { playerReady = true; }, 2000);
}