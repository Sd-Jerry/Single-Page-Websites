(function () {

    /* ---- 1. NAV ITEMS CONFIG ---- */
    const NAV_ITEMS = [
        { label: "Home", href: "index.html", section: "home" },
        { label: "About Us", href: "aboutus.html", section: "about" },
        { label: "Services", href: "service.html", section: "services" },
        { label: "Events", href: "events.html", section: "events" },
        { label: "Testimonials", href: "testimonials.html", section: "testimonials" },
        { label: "Blog", href: "blog.html", section: "blog" },
        { label: "Contact Us", href: "contact.html", section: "contact" },
    ];

    const CTA = {
        label: "Book Event",
        href: "contact.html",
    };

    const CONTACT = {
        phone: "+91 98765 43210",
        email: "hello@blevents.in",
    };

    /* ---- 2. DETECT ACTIVE PAGE ---- */
    function getActivePage() {
        const path = window.location.pathname;
        const file = path.split("/").pop() || "index.html";
        return file;
    }

    /* ---- 3. RESOLVE PATHS ----
       All HTML files are in the same folder.
       Relative paths work — no calculation needed.
    ---- */
    function resolvePath(href) {
        return href;
    }

    /* ---- 4. BUILD NAVBAR HTML ---- */
    function buildNavHTML() {
        const activePage = getActivePage();

        const desktopLinks = NAV_ITEMS.map(item => {
            const itemFile = item.href.split("/").pop();
            const isActive = (activePage === itemFile) ? " active" : "";
            return `<li>
                <a href="${item.href}" class="nav-link${isActive}">${item.label}</a>
            </li>`;
        }).join("\n");

        const drawerLinks = NAV_ITEMS.map(item => {
            return `<li>
                <a href="${item.href}" class="drawer-link">${item.label}</a>
            </li>`;
        }).join("\n");

        return `
<header id="site-header">
    <nav id="navbar">

        <div class="nav-logo">
            <a href="index.html">
                <img src="./imgs/icons/bl-events-logo-white.svg"
                     alt="BL Events Logo" />
            </a>
        </div>

        <ul class="nav-list">
            ${desktopLinks}
        </ul>

        <div class="nav-actions">
            <a href="${CTA.href}" class="nav-cta">
                ${CTA.label} <i class="fa-solid fa-arrow-right"></i>
            </a>
            <button class="nav-hamburger" id="navHamburger" aria-label="Toggle Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

    </nav>

    <div class="nav-drawer" id="navDrawer">
        <ul class="drawer-list">
            ${drawerLinks}
        </ul>
        <a href="${CTA.href}" class="drawer-cta">
            <i class="fa-solid fa-calendar-check"></i> Book Your Event
        </a>
        <div class="drawer-contact">
            <a href="tel:+919876543210">
                <i class="fa-solid fa-phone"></i> ${CONTACT.phone}
            </a>
            <a href="mailto:${CONTACT.email}">
                <i class="fa-solid fa-envelope"></i> ${CONTACT.email}
            </a>
        </div>
    </div>

    <div class="nav-backdrop" id="navBackdrop"></div>
</header>
        `;
    }

    /* ---- 5. INJECT INTO PAGE ---- */
    function injectNavbar() {
        const placeholder = document.getElementById("bl-navbar");
        if (!placeholder) {
            console.warn("BL Events Navbar: No <div id='bl-navbar'> found.");
            return;
        }
        placeholder.outerHTML = buildNavHTML();
    }

    /* ---- 6. SCROLL BEHAVIOUR ---- */
    function initScrollBehaviour() {
        const siteHeader = document.getElementById("site-header");
        if (!siteHeader) return;

        function onScroll() {
            if (window.scrollY > 50) {
                siteHeader.classList.add("nav-scrolled");
                siteHeader.classList.remove("nav-top");
            } else {
                siteHeader.classList.add("nav-top");
                siteHeader.classList.remove("nav-scrolled");
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    /* ---- 7. HAMBURGER & DRAWER ---- */
    function initDrawer() {
        const hamburger = document.getElementById("navHamburger");
        const drawer = document.getElementById("navDrawer");
        const backdrop = document.getElementById("navBackdrop");
        if (!hamburger || !drawer || !backdrop) return;

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

        document.querySelectorAll(".drawer-link, .drawer-cta").forEach(link => {
            link.addEventListener("click", closeDrawer);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeDrawer();
        });
    }

    /* ---- 8. SCROLL SPY (index.html only) ---- */
    function initScrollSpy() {
        const activePage = getActivePage();
        const isIndex = (activePage === "index.html" || activePage === "");
        if (!isIndex) return;

        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(l => l.classList.remove("active"));
                        const id = entry.target.getAttribute("id");
                        const match = document.querySelector(`.nav-link[href*="${id}"]`);
                        if (match) match.classList.add("active");
                    }
                });
            },
            { threshold: 0, rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach(s => observer.observe(s));
    }

    /* ---- 9. INIT ---- */
    function init() {
        injectNavbar();
        initScrollBehaviour();
        initDrawer();
        initScrollSpy();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();