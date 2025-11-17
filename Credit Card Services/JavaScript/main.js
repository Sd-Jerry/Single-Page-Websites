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