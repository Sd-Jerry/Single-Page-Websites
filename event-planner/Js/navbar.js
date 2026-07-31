/* ============================================
   BL EVENTS — GLOBAL NAVBAR COMPONENT
   File: js/navbar.js
   Usage: Include this script on every page.
          Add <div id="bl-navbar"></div> where
          your <header> used to be.
============================================ */

(function () {

    /* ---- 1. NAV ITEMS CONFIG ----
       To add/remove/rename a nav link,
       edit ONLY this array. Done.
    ---------------------------------------- */
    const NAV_ITEMS = [
        { label: "Home", href: "/index.html", section: "home" },
        { label: "About Us", href: "/about.html", section: "about" },
        { label: "Services", href: "/services.html", section: "services" },
        { label: "Testimonials", href: "/testimonials.html", section: "testimonials" },
        { label: "Events", href: "/events.html", section: "events" },
        { label: "Blog", href: "/blog.html", section: "blog" },
        { label: "Contact Us", href: "/contact.html", section: "contact" },
    ];

    const CTA = {
        label: "Book Event",
        href: "/contact.html",
    };

    const CONTACT = {
        phone: "+91 98765 43210",
        email: "hello@blevents.in",
    };

    /* ---- 2. DETECT ACTIVE PAGE ----
       Matches current filename to nav href.
    ---------------------------------------- */
    function getActivePage() {
        const path = window.location.pathname;
        // Extract the filename (e.g. "about.html" or "" for root/index)
        const file = path.split("/").pop() || "index.html";
        return file;
    }

    /* ---- 3. RESOLVE RELATIVE PATHS ----
       Finds how many folders deep we are
       so hrefs work from any subdirectory.
    ---------------------------------------- */
    function resolvePath(href) {
        const depth = (window.location.pathname.match(/\//g) || []).length - 1;
        if (depth <= 0) {
            // We're at root — remove the leading slash
            return href.replace(/^\//, "./");
        }
        // We're in a subfolder — go up N levels
        const prefix = "../".repeat(depth);
        return prefix + href.replace(/^\//, "");
    }

    /* ---- 4. BUILD NAVBAR HTML ----
    ---------------------------------------- */
    function buildNavHTML() {
        const activePage = getActivePage();

        /* Desktop nav links */
        const desktopLinks = NAV_ITEMS.map(item => {
            const href = resolvePath(item.href);
            const itemFile = item.href.split("/").pop() || "index.html";
            const isActive = (activePage === itemFile) ? " active" : "";
            return `<li><a href="${href}" class="nav-link${isActive}">${item.label}</a></li>`;
        }).join("\n");

        /* Mobile drawer links */
        const drawerLinks = NAV_ITEMS.map(item => {
            const href = resolvePath(item.href);
            return `<li><a href="${href}" class="drawer-link">${item.label}</a></li>`;
        }).join("\n");

        const ctaHref = resolvePath(CTA.href);

        return `
<header id="site-header">
    <nav id="navbar">

        <!-- Logo -->
        <div class="nav-logo">
            <a href="${resolvePath("/index.html")}">
                <img src="${resolvePath("/imgs/icons/bl-events-logo-white.svg")}"
                     alt="BL Events Logo" />
            </a>
        </div>

        <!-- Desktop Nav -->
        <ul class="nav-list">
            ${desktopLinks}
        </ul>

        <!-- Actions -->
        <div class="nav-actions">
            <a href="${ctaHref}" class="nav-cta">
                ${CTA.label} <i class="fa-solid fa-arrow-right"></i>
            </a>
            <button class="nav-hamburger" id="navHamburger" aria-label="Toggle Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

    </nav>

    <!-- Mobile Drawer -->
    <div class="nav-drawer" id="navDrawer">
        <ul class="drawer-list">
            ${drawerLinks}
        </ul>
        <a href="${ctaHref}" class="drawer-cta">
            <i class="fa-solid fa-calendar-check"></i> Book Your Event
        </a>
        <div class="drawer-contact">
            <a href="tel:${CONTACT.phone.replace(/\s/g, "")}">
                <i class="fa-solid fa-phone"></i> ${CONTACT.phone}
            </a>
            <a href="mailto:${CONTACT.email}">
                <i class="fa-solid fa-envelope"></i> ${CONTACT.email}
            </a>
        </div>
    </div>

    <!-- Backdrop -->
    <div class="nav-backdrop" id="navBackdrop"></div>
</header>
        `;
    }

    /* ---- 5. INJECT INTO PAGE ----
    ---------------------------------------- */
    function injectNavbar() {
        const placeholder = document.getElementById("bl-navbar");
        if (!placeholder) {
            console.warn("BL Events Navbar: No <div id='bl-navbar'> found on this page.");
            return;
        }
        placeholder.outerHTML = buildNavHTML();
    }

    /* ---- 6. SCROLL BEHAVIOUR ----
       Transparent on top, dark when scrolled.
    ---------------------------------------- */
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
        onScroll(); // run immediately on load
    }

    /* ---- 7. HAMBURGER & DRAWER ----
    ---------------------------------------- */
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

        // Close on backdrop click
        backdrop.addEventListener("click", closeDrawer);

        // Close on drawer link click
        document.querySelectorAll(".drawer-link, .drawer-cta").forEach(link => {
            link.addEventListener("click", closeDrawer);
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeDrawer();
        });
    }

    /* ---- 8. ACTIVE LINK ON SCROLL ----
       Highlights the nav link of whichever
       section is currently in the viewport.
       Only runs on index.html (single-page).
    ---------------------------------------- */
    function initScrollSpy() {
        // Only run on the main index page
        const isIndex = (getActivePage() === "index.html" || getActivePage() === "");
        if (!isIndex) return;

        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => link.classList.remove("active"));
                        const id = entry.target.getAttribute("id");
                        const matching = document.querySelector(`.nav-link[href*="${id}"]`);
                        if (matching) matching.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.35,
                rootMargin: "-80px 0px 0px 0px",
            }
        );

        sections.forEach(section => observer.observe(section));
    }

    /* ---- 9. INIT ----
       Run everything once DOM is ready.
    ---------------------------------------- */
    function init() {
        injectNavbar();
        initScrollBehaviour();
        initDrawer();
        initScrollSpy();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init(); // DOM already ready
    }

})();