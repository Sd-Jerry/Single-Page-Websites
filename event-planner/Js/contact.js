/* ---- EmailJS Init ----
           Replace with your actual EmailJS Public Key, Service ID, and Template ID
           Sign up free at https://www.emailjs.com
        */
emailjs.init("YOUR_PUBLIC_KEY");      // ← Replace with your EmailJS Public Key

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";  // ← Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // ← Your EmailJS Template ID

/* ================================
   NAVBAR
================================ */
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

/* ================================
   MULTI-STEP FORM
================================ */
let currentStep = 1;
const totalSteps = 3;

function showStep(n) {
    document.querySelectorAll(".form-panel").forEach((p, i) => {
        p.classList.toggle("active", i === n - 1);
    });
    document.querySelectorAll(".form-step").forEach((s, i) => {
        s.classList.remove("active", "done");
        if (i < n - 1) s.classList.add("done");
        if (i === n - 1) s.classList.add("active");
    });
    currentStep = n;
}

function validateStep(step) {
    let valid = true;

    if (step === 1) {
        const name = document.getElementById("fullName");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const city = document.getElementById("city");

        valid = validate(name, name.value.trim().length >= 2, "err-fullName") & valid;
        valid = validate(phone, /^[\d\s\+\-]{10,15}$/.test(phone.value.trim()), "err-phone") & valid;
        valid = validate(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), "err-email") & valid;
        valid = validate(city, city.value.trim().length >= 2, "err-city") & valid;
    }

    if (step === 2) {
        const checked = document.querySelectorAll("#serviceGrid input:checked").length;
        valid = validate(null, checked > 0, "err-services") & valid;
        const date = document.getElementById("eventDate");
        valid = validate(date, date.value !== "", "err-eventDate") & valid;
    }

    if (step === 3) {
        const msg = document.getElementById("message");
        valid = validate(msg, msg.value.trim().length >= 20, "err-message") & valid;
    }

    return valid;
}

function validate(field, condition, errId) {
    const errEl = document.getElementById(errId);
    if (!condition) {
        if (field) field.classList.add("invalid"); field && field.classList.remove("valid");
        if (errEl) errEl.classList.add("show");
        return false;
    } else {
        if (field) { field.classList.remove("invalid"); field.classList.add("valid"); }
        if (errEl) errEl.classList.remove("show");
        return true;
    }
}

function nextStep(from) {
    if (!validateStep(from)) return;
    if (from < totalSteps) showStep(from + 1);
}

function prevStep(from) {
    if (from > 1) showStep(from - 1);
}

// Live validation on input
document.querySelectorAll(".form-input, .form-select, .form-textarea").forEach(el => {
    el.addEventListener("blur", () => {
        if (el.value.trim() !== "") el.classList.add("valid");
    });
    el.addEventListener("input", () => {
        if (el.classList.contains("invalid") && el.value.trim() !== "") {
            el.classList.remove("invalid"); el.classList.add("valid");
        }
    });
});

/* ================================
   SERVICE CHECKBOXES
================================ */
document.querySelectorAll(".service-check-label").forEach(label => {
    const cb = label.querySelector("input[type='checkbox']");
    label.addEventListener("click", () => {
        cb.checked = !cb.checked;
        label.classList.toggle("checked", cb.checked);
    });
});

/* ================================
   SOURCE CHIPS
================================ */
document.querySelectorAll(".source-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        chip.classList.toggle("selected");
        const selected = [...document.querySelectorAll(".source-chip.selected")]
            .map(c => c.dataset.val).join(", ");
        document.getElementById("hearAbout").value = selected;
    });
});

/* ================================
   BUDGET SLIDER
================================ */
const budgetRanges = [
    "₹25,000 – ₹50,000", "₹50,000 – ₹75,000", "₹75,000 – ₹1,00,000",
    "₹1,00,000 – ₹1,50,000", "₹1,50,000 – ₹2,00,000", "₹2,00,000 – ₹3,00,000",
    "₹3,00,000 – ₹5,00,000", "₹5,00,000 – ₹7,50,000", "₹7,50,000 – ₹10,00,000",
    "₹10,00,000 – ₹15,00,000", "₹15,00,000 – ₹25,00,000", "₹25,00,000+"
];

function updateBudget(slider) {
    const pct = slider.value + "%";
    slider.style.setProperty("--pct", pct);
    const idx = Math.floor((slider.value / 100) * (budgetRanges.length - 1));
    const label = budgetRanges[Math.min(idx, budgetRanges.length - 1)];
    document.getElementById("budgetVal").textContent = label;
    document.getElementById("budget").value = label;
}

/* ================================
   EXCITEMENT STARS
================================ */
let excitementVal = 0;
const eStars = document.querySelectorAll("#excitementStars .form-star");

eStars.forEach(star => {
    star.addEventListener("mouseenter", () => {
        const v = parseInt(star.dataset.val);
        eStars.forEach((s, i) => s.classList.toggle("lit", i < v));
    });
    star.addEventListener("mouseleave", () => {
        eStars.forEach((s, i) => s.classList.toggle("lit", i < excitementVal));
    });
    star.addEventListener("click", () => {
        excitementVal = parseInt(star.dataset.val);
        document.getElementById("excitement").value = excitementVal + " / 5";
        eStars.forEach((s, i) => s.classList.toggle("lit", i < excitementVal));
    });
});

/* ================================
   FORM SUBMISSION (EmailJS)
================================ */
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateStep(3)) return;

    // Gather selected services
    const services = [...document.querySelectorAll("#serviceGrid input:checked")]
        .map(cb => cb.value).join(", ") || "Not specified";

    // Gather source chips
    const hearAbout = document.getElementById("hearAbout").value || "Not specified";

    const templateParams = {
        to_name: "BL Events Team",
        from_name: document.getElementById("fullName").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        whatsapp: document.getElementById("whatsapp").value || "Same as phone",
        city: document.getElementById("city").value,
        hear_about: hearAbout,
        services: services,
        event_date: document.getElementById("eventDate").value,
        event_location: document.getElementById("eventLocation").value || "Not specified",
        guest_count: document.getElementById("guestCount").value || "Not specified",
        venue_type: document.getElementById("venueType").value || "Not specified",
        budget: document.getElementById("budget").value,
        contact_time: document.getElementById("contactTime").value || "Anytime",
        excitement: document.getElementById("excitement").value || "Not rated",
        message: document.getElementById("message").value,
    };

    const btn = document.getElementById("submitBtn");
    btn.classList.add("loading");

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            btn.classList.remove("loading");
            document.getElementById("inquiryForm").style.display = "none";
            document.getElementById("formSteps").style.display = "none";
            document.querySelector(".form-header").style.display = "none";
            document.getElementById("formSuccess").classList.add("show");
        })
        .catch((err) => {
            btn.classList.remove("loading");
            console.error("EmailJS Error:", err);
            alert("Something went wrong. Please call us directly at +91 98765 43210 or email hello@blevents.in");
        });
});

// Reset form for new inquiry
document.getElementById("newInquiryBtn").addEventListener("click", () => {
    document.getElementById("inquiryForm").reset();
    document.getElementById("inquiryForm").style.display = "block";
    document.getElementById("formSteps").style.display = "flex";
    document.querySelector(".form-header").style.display = "block";
    document.getElementById("formSuccess").classList.remove("show");
    document.querySelectorAll(".form-input,.form-select,.form-textarea").forEach(el => el.classList.remove("valid", "invalid"));
    document.querySelectorAll(".service-check-label").forEach(l => l.classList.remove("checked"));
    document.querySelectorAll(".source-chip").forEach(c => c.classList.remove("selected"));
    eStars.forEach(s => s.classList.remove("lit"));
    excitementVal = 0;
    const slider = document.getElementById("budgetSlider");
    slider.value = 20; updateBudget(slider);
    showStep(1);
});

/* ================================
   FAQ ACCORDION
================================ */
document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
        const item = q.parentElement;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
    });
});

/* ================================
   SCROLL REVEAL
================================ */
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