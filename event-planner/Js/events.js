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

// ---- Showreel videos: play when visible, pause when off-screen ----
const reelVideos = document.querySelectorAll(".reel-video");

if (reelVideos.length) {
    const reelObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const vid = entry.target;
            if (entry.isIntersecting) {
                vid.play().catch(() => { });
            } else {
                vid.pause();
            }
        });
    }, { threshold: 0.4 });

    reelVideos.forEach(v => reelObs.observe(v));
}