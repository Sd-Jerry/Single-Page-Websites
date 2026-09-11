/* ============================================================
   BL EVENTS — GALLERY LIGHTBOX
   File: Js/gallery-lightbox.js
   Drop-in: add <script src="./Js/gallery-lightbox.js"></script>
            before </body> in events.html
============================================================ */

(function () {
    "use strict";

    /* ============================================================
       1. ALBUM DATA
       Add / edit photos here for each event.
       Each album key matches the data-album-id on your gallery card.
       "src"     → path to full image (use your actual ./imgs/ paths)
       "caption" → short label shown at bottom of lightbox
    ============================================================ */
    const ALBUMS = {

        /* ── WEDDINGS ─────────────────────────────────────── */
        "sharma-mehta-wedding": {
            title: "Sharma – Mehta Grand Wedding Reception",
            category: "Wedding",
            icon: "fa-solid fa-rings-wedding",
            location: "Rajkot, Gujarat",
            photos: [
                { src: "./imgs/events/wedding/sharma-mehta-01.webp", caption: "Grand Mandap Entrance" },
                { src: "./imgs/events/wedding/sharma-mehta-02.webp", caption: "Floral Ceiling Canopy" },
                { src: "./imgs/events/wedding/sharma-mehta-03.webp", caption: "Bridal Entry Moment" },
                { src: "./imgs/events/wedding/sharma-mehta-04.webp", caption: "Phera Ceremony" },
                { src: "./imgs/events/wedding/sharma-mehta-05.webp", caption: "Reception Stage Setup" },
                { src: "./imgs/events/wedding/sharma-mehta-06.webp", caption: "Couple First Dance" },
                { src: "./imgs/events/wedding/sharma-mehta-07.webp", caption: "Family Portrait Session" },
                { src: "./imgs/events/wedding/sharma-mehta-08.webp", caption: "Sparkler Farewell" },
            ]
        },

        "floral-palace-wedding": {
            title: "Floral Palace Wedding — Jamnagar",
            category: "Wedding",
            icon: "fa-solid fa-rings-wedding",
            location: "Jamnagar, Gujarat",
            photos: [
                { src: "./imgs/events/wedding/floral-palace-01.webp", caption: "Heritage Venue Setup" },
                { src: "./imgs/events/wedding/floral-palace-02.webp", caption: "Garden Ceremony" },
                { src: "./imgs/events/wedding/floral-palace-03.webp", caption: "Ivory & Gold Décor" },
                { src: "./imgs/events/wedding/floral-palace-04.webp", caption: "Mehndi Celebration" },
                { src: "./imgs/events/wedding/floral-palace-05.webp", caption: "Reception Hall" },
                { src: "./imgs/events/wedding/floral-palace-06.webp", caption: "Sunset Couple Shoot" },
            ]
        },

        /* ── CORPORATE ────────────────────────────────────── */
        "annual-leadership-gala": {
            title: "Annual Leadership Gala 2026",
            category: "Corporate",
            icon: "fa-solid fa-briefcase",
            location: "Ahmedabad, Gujarat",
            photos: [
                { src: "./imgs/events/corporate/leadership-gala-01.webp", caption: "Grand Ballroom Setup" },
                { src: "./imgs/events/corporate/leadership-gala-02.webp", caption: "Opening Keynote" },
                { src: "./imgs/events/corporate/leadership-gala-03.webp", caption: "Award Ceremony" },
                { src: "./imgs/events/corporate/leadership-gala-04.webp", caption: "Leadership Panel" },
                { src: "./imgs/events/corporate/leadership-gala-05.webp", caption: "Networking Dinner" },
                { src: "./imgs/events/corporate/leadership-gala-06.webp", caption: "Stage & Lighting Design" },
                { src: "./imgs/events/corporate/leadership-gala-07.webp", caption: "Award Presentation" },
            ]
        },

        /* ── LIVE SHOWS ───────────────────────────────────── */
        "sargam-musical-night": {
            title: "Sargam Musical Night 2024",
            category: "Live Show",
            icon: "fa-solid fa-music",
            location: "Vadodara · 5,000+ Guests",
            photos: [
                { src: "./imgs/events/liveshow/sargam-01.webp", caption: "Main Stage Opening" },
                { src: "./imgs/events/liveshow/sargam-02.webp", caption: "Lead Performer" },
                { src: "./imgs/events/liveshow/sargam-03.webp", caption: "Crowd Aerial View" },
                { src: "./imgs/events/liveshow/sargam-04.webp", caption: "Laser Light Show" },
                { src: "./imgs/events/liveshow/sargam-05.webp", caption: "Backstage Setup" },
                { src: "./imgs/events/liveshow/sargam-06.webp", caption: "Standing Ovation" },
                { src: "./imgs/events/liveshow/sargam-07.webp", caption: "Fireworks Finale" },
                { src: "./imgs/events/liveshow/sargam-08.webp", caption: "Sound & AV Setup" },
            ]
        },

        /* ── CULTURAL ─────────────────────────────────────── */
        "navratri-grand-festival": {
            title: "Navratri Grand Festival",
            category: "Cultural",
            icon: "fa-solid fa-masks-theater",
            location: "Junagadh, Gujarat",
            photos: [
                { src: "./imgs/events/cultural/navratri-01.webp", caption: "Main Garba Ground" },
                { src: "./imgs/events/cultural/navratri-02.webp", caption: "Deity Installation" },
                { src: "./imgs/events/cultural/navratri-03.webp", caption: "Opening Aarti Night 1" },
                { src: "./imgs/events/cultural/navratri-04.webp", caption: "Traditional Garba Circles" },
                { src: "./imgs/events/cultural/navratri-05.webp", caption: "Dandiya Night" },
                { src: "./imgs/events/cultural/navratri-06.webp", caption: "Live Artist Performance" },
                { src: "./imgs/events/cultural/navratri-07.webp", caption: "Colourful Chaniya Cholis" },
                { src: "./imgs/events/cultural/navratri-08.webp", caption: "Finale Night Celebrations" },
                { src: "./imgs/events/cultural/navratri-09.webp", caption: "Drone View of Grounds" },
            ]
        },

        /* ── BIRTHDAY ─────────────────────────────────────── */
        "royal-50th-birthday": {
            title: "Royal 50th Birthday Celebration",
            category: "Birthday",
            icon: "fa-solid fa-cake-candles",
            location: "Surat, Gujarat",
            photos: [
                { src: "./imgs/events/birthday/royal-50th-01.webp", caption: "Grand Entrance Setup" },
                { src: "./imgs/events/birthday/royal-50th-02.webp", caption: "Custom Floral Décor" },
                { src: "./imgs/events/birthday/royal-50th-03.webp", caption: "5-Tier Signature Cake" },
                { src: "./imgs/events/birthday/royal-50th-04.webp", caption: "Cake Cutting Ceremony" },
                { src: "./imgs/events/birthday/royal-50th-05.webp", caption: "Family Celebration" },
                { src: "./imgs/events/birthday/royal-50th-06.webp", caption: "Live Band Performance" },
            ]
        },

        /* ── BRANDING ─────────────────────────────────────── */
        "luxury-brand-activation": {
            title: "Luxury Brand Activation Campaign",
            category: "Branding",
            icon: "fa-solid fa-bullhorn",
            location: "Rajkot City · 2,000+ Visitors",
            photos: [
                { src: "./imgs/events/branding/luxury-brand-01.webp", caption: "Brand Pavilion Setup" },
                { src: "./imgs/events/branding/luxury-brand-02.webp", caption: "Product Display Zone" },
                { src: "./imgs/events/branding/luxury-brand-03.webp", caption: "Brand Ambassador Stage" },
                { src: "./imgs/events/branding/luxury-brand-04.webp", caption: "Interactive Brand Wall" },
                { src: "./imgs/events/branding/luxury-brand-05.webp", caption: "Media Coverage Moment" },
                { src: "./imgs/events/branding/luxury-brand-06.webp", caption: "Evening Light Show" },
                { src: "./imgs/events/branding/luxury-brand-07.webp", caption: "Visitor Engagement Zone" },
            ]
        },

        /* ── EXHIBITION ───────────────────────────────────── */
        "gujarat-trade-expo": {
            title: "Gujarat Trade & Innovation Expo",
            category: "Exhibition",
            icon: "fa-solid fa-store",
            location: "Gandhinagar, Gujarat",
            photos: [
                { src: "./imgs/events/exhibition/trade-expo-01.webp", caption: "Main Exhibition Hall" },
                { src: "./imgs/events/exhibition/trade-expo-02.webp", caption: "Stall Design & Setup" },
                { src: "./imgs/events/exhibition/trade-expo-03.webp", caption: "Opening Ceremony" },
                { src: "./imgs/events/exhibition/trade-expo-04.webp", caption: "Product Demonstrations" },
                { src: "./imgs/events/exhibition/trade-expo-05.webp", caption: "Networking Lounge" },
                { src: "./imgs/events/exhibition/trade-expo-06.webp", caption: "Award & Closing" },
            ]
        },

        /* ── LIVE SHOWS ───────────────────────────────────── */
        "bollywood-night-live": {
            title: "Bollywood Night Live — Rajkot Arena 2023",
            category: "Live Show",
            icon: "fa-solid fa-music",
            location: "Rajkot · 8,000+ Attended",
            photos: [
                { src: "./imgs/events/liveshow/bollywood-night-01.webp", caption: "Arena Stage Setup" },
                { src: "./imgs/events/liveshow/bollywood-night-02.webp", caption: "Opening Performance" },
                { src: "./imgs/events/liveshow/bollywood-night-03.webp", caption: "Crowd Aerial View" },
                { src: "./imgs/events/liveshow/bollywood-night-04.webp", caption: "Celebrity Guest Appearance" },
                { src: "./imgs/events/liveshow/bollywood-night-05.webp", caption: "Laser & Pyro Show" },
                { src: "./imgs/events/liveshow/bollywood-night-06.webp", caption: "Finale Confetti Drop" },
            ]
        },

        /* ── CORPORATE ────────────────────────────────────── */
        "industry-excellence-award-night": {
            title: "Industry Excellence Award Night",
            category: "Corporate",
            icon: "fa-solid fa-briefcase",
            location: "Surat, Gujarat",
            photos: [
                { src: "./imgs/events/corporate/award-night-01.webp", caption: "Red Carpet Entrance" },
                { src: "./imgs/events/corporate/award-night-02.webp", caption: "Opening Address" },
                { src: "./imgs/events/corporate/award-night-03.webp", caption: "Award Presentation" },
                { src: "./imgs/events/corporate/award-night-04.webp", caption: "Winners Group Photo" },
                { src: "./imgs/events/corporate/award-night-05.webp", caption: "Gala Dinner" },
            ]
        },

        /* ── CULTURAL ─────────────────────────────────────── */
        "ram-navami-community-program": {
            title: "Ram Navami Community Program",
            category: "Cultural",
            icon: "fa-solid fa-masks-theater",
            location: "Rajkot, Gujarat",
            photos: [
                { src: "./imgs/events/cultural/ram-navami-01.webp", caption: "Community Ground Setup" },
                { src: "./imgs/events/cultural/ram-navami-02.webp", caption: "Opening Aarti" },
                { src: "./imgs/events/cultural/ram-navami-03.webp", caption: "Procession Rally" },
                { src: "./imgs/events/cultural/ram-navami-04.webp", caption: "Devotional Performance" },
                { src: "./imgs/events/cultural/ram-navami-05.webp", caption: "Prasad Distribution" },
            ]
        },

        /* ── BIRTHDAY ─────────────────────────────────────── */
        "enchanted-garden-kids-birthday": {
            title: "Enchanted Garden Kids Birthday",
            category: "Birthday",
            icon: "fa-solid fa-cake-candles",
            location: "Rajkot, Gujarat",
            photos: [
                { src: "./imgs/events/birthday/enchanted-garden-01.webp", caption: "Garden Theme Setup" },
                { src: "./imgs/events/birthday/enchanted-garden-02.webp", caption: "Balloon Arch Entrance" },
                { src: "./imgs/events/birthday/enchanted-garden-03.webp", caption: "Kids Play Zone" },
                { src: "./imgs/events/birthday/enchanted-garden-04.webp", caption: "Character Mascot Visit" },
                { src: "./imgs/events/birthday/enchanted-garden-05.webp", caption: "Cake Cutting Moment" },
            ]
        },

    };


    /* ============================================================
       2. LIGHTBOX STATE
    ============================================================ */
    let currentAlbumId = null;
    let currentIndex = 0;
    let isAnimating = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;


    /* ============================================================
       3. BUILD LIGHTBOX HTML — injected once into DOM
    ============================================================ */
    function buildLightboxHTML() {
        const markup = `
<div class="glb-overlay" id="glbOverlay" role="dialog" aria-modal="true" aria-label="Photo Gallery">

    <!-- Top bar -->
    <div class="glb-topbar">
        <div class="glb-event-info">
            <span class="glb-cat-badge" id="glbCatBadge">
                <i id="glbCatIcon" class="fa-solid fa-images"></i>
                <span id="glbCatText">Gallery</span>
            </span>
            <span class="glb-event-name" id="glbEventName">Event Name</span>
        </div>
        <div class="glb-topbar-right">
            <span class="glb-counter">
                <strong id="glbCurrent">1</strong>
                <span style="color:rgba(255,255,255,0.3);margin:0 4px">/</span>
                <span id="glbTotal">8</span>
            </span>
            <button class="glb-close-btn" id="glbCloseBtn" aria-label="Close gallery">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>

    <!-- Image stage -->
    <div class="glb-stage" id="glbStage">
        <div class="glb-skeleton" id="glbSkeleton"></div>
        <div class="glb-img-wrap" id="glbImgWrap">
            <img class="glb-main-img" id="glbMainImg" src="" alt="" draggable="false" />
            <div class="glb-caption" id="glbCaption"></div>
        </div>
        <button class="glb-arrow glb-arrow-prev" id="glbPrev" aria-label="Previous photo">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="glb-arrow glb-arrow-next" id="glbNext" aria-label="Next photo">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>

    <!-- Thumbnails + dots -->
    <div class="glb-thumbs-wrap" id="glbThumbsWrap">
        <div class="glb-thumbs-inner" id="glbThumbsInner"></div>
        <div class="glb-dots" id="glbDots"></div>
    </div>

</div>
        `;
        document.body.insertAdjacentHTML("beforeend", markup);
    }


    /* ============================================================
       4. OPEN LIGHTBOX
    ============================================================ */
    function openLightbox(albumId, startIndex) {
        const album = ALBUMS[albumId];
        if (!album || !album.photos.length) {
            console.warn("BL Gallery: No album found for id →", albumId);
            return;
        }

        currentAlbumId = albumId;
        currentIndex = startIndex || 0;

        // Populate header
        document.getElementById("glbCatText").textContent = album.category;
        document.getElementById("glbCatIcon").className = album.icon;
        document.getElementById("glbEventName").textContent = album.title;
        document.getElementById("glbTotal").textContent = album.photos.length;

        // Build thumbnails
        buildThumbs(album);

        // Build dots (only when ≤ 10 photos, cleaner UI)
        buildDots(album);

        // Show image
        showImage(currentIndex, null);

        // Open overlay
        const overlay = document.getElementById("glbOverlay");
        overlay.classList.add("glb-open");
        document.body.style.overflow = "hidden";

        // Focus trap
        setTimeout(() => document.getElementById("glbCloseBtn").focus(), 50);
    }


    /* ============================================================
       5. CLOSE LIGHTBOX
    ============================================================ */
    function closeLightbox() {
        const overlay = document.getElementById("glbOverlay");
        overlay.classList.remove("glb-open");
        document.body.style.overflow = "";
        currentAlbumId = null;
        isAnimating = false;
    }


    /* ============================================================
       6. SHOW IMAGE (with optional slide direction)
       direction: "left" | "right" | null (no animation)
    ============================================================ */
    function showImage(index, direction) {
        const album = ALBUMS[currentAlbumId];
        const photo = album.photos[index];
        const imgEl = document.getElementById("glbMainImg");
        const capEl = document.getElementById("glbCaption");
        const skelEl = document.getElementById("glbSkeleton");

        isAnimating = true;

        // --- animate out if we have a direction ---
        if (direction) {
            imgEl.classList.remove("glb-slide-in");
            imgEl.classList.add(
                direction === "left" ? "glb-slide-left-out" : "glb-slide-right-out"
            );
        }

        // Show skeleton while loading
        setTimeout(() => {
            skelEl.classList.add("show");
            imgEl.style.opacity = "0";

            const newImg = new Image();
            newImg.src = photo.src;

            newImg.onload = () => {
                imgEl.src = photo.src;
                imgEl.alt = photo.caption || "";
                capEl.textContent = photo.caption || "";

                imgEl.classList.remove("glb-slide-left-out", "glb-slide-right-out");

                // Slide in from opposite direction
                if (direction === "left") {
                    imgEl.style.transform = "translateX(60px)";
                } else if (direction === "right") {
                    imgEl.style.transform = "translateX(-60px)";
                }
                imgEl.style.opacity = "0";

                requestAnimationFrame(() => {
                    skelEl.classList.remove("show");
                    imgEl.style.opacity = "1";
                    imgEl.style.transform = "translateX(0)";
                    imgEl.classList.add("glb-slide-in");
                    isAnimating = false;
                });
            };

            newImg.onerror = () => {
                // Fallback: clear skeleton, show placeholder
                skelEl.classList.remove("show");
                imgEl.src = "";
                imgEl.style.opacity = "0.3";
                capEl.textContent = photo.caption || "Image unavailable";
                isAnimating = false;
            };

        }, direction ? 200 : 0);

        // Update counter
        document.getElementById("glbCurrent").textContent = index + 1;

        // Update arrow states
        document.getElementById("glbPrev").classList.toggle(
            "glb-arrow-hidden", index === 0
        );
        document.getElementById("glbNext").classList.toggle(
            "glb-arrow-hidden", index === album.photos.length - 1
        );

        // Update active thumb
        updateActiveThumb(index);

        // Update active dot
        updateActiveDot(index);
    }


    /* ============================================================
       7. NAVIGATION
    ============================================================ */
    function goNext() {
        if (isAnimating) return;
        const album = ALBUMS[currentAlbumId];
        if (!album || currentIndex >= album.photos.length - 1) return;
        currentIndex++;
        showImage(currentIndex, "left");
    }

    function goPrev() {
        if (isAnimating) return;
        if (currentIndex <= 0) return;
        currentIndex--;
        showImage(currentIndex, "right");
    }

    function goTo(index) {
        if (isAnimating || index === currentIndex) return;
        const direction = index > currentIndex ? "left" : "right";
        currentIndex = index;
        showImage(currentIndex, direction);
    }


    /* ============================================================
       8. BUILD THUMBNAILS
    ============================================================ */
    function buildThumbs(album) {
        const container = document.getElementById("glbThumbsInner");
        container.innerHTML = "";

        album.photos.forEach((photo, i) => {
            const thumb = document.createElement("div");
            thumb.className = "glb-thumb";
            thumb.setAttribute("data-index", i);
            thumb.setAttribute("aria-label", photo.caption || `Photo ${i + 1}`);
            thumb.setAttribute("role", "button");
            thumb.setAttribute("tabindex", "0");

            const img = document.createElement("img");
            img.src = photo.src;
            img.alt = photo.caption || "";
            img.loading = "lazy";

            thumb.appendChild(img);
            container.appendChild(thumb);

            thumb.addEventListener("click", () => goTo(i));
            thumb.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goTo(i);
                }
            });
        });
    }

    function updateActiveThumb(index) {
        const thumbs = document.querySelectorAll(".glb-thumb");
        thumbs.forEach((t, i) => t.classList.toggle("glb-thumb-active", i === index));

        // Scroll active thumb into view
        const activeThumb = thumbs[index];
        if (activeThumb) {
            activeThumb.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }


    /* ============================================================
       9. BUILD PROGRESS DOTS (for albums ≤ 10 photos)
    ============================================================ */
    function buildDots(album) {
        const dotsContainer = document.getElementById("glbDots");
        const thumbsWrap = document.getElementById("glbThumbsWrap");
        dotsContainer.innerHTML = "";

        // Show dots only on mobile (thumbnails too small)
        // Always build them; CSS/JS hides on desktop via class
        album.photos.forEach((_, i) => {
            const dot = document.createElement("div");
            dot.className = "glb-dot" + (i === 0 ? " active" : "");
            dot.setAttribute("data-index", i);
            dot.addEventListener("click", () => goTo(i));
            dotsContainer.appendChild(dot);
        });

        // Show dots strip on mobile, thumbnails on desktop
        const isMobile = window.innerWidth < 600;
        dotsContainer.style.display = isMobile ? "flex" : "none";
        document.getElementById("glbThumbsInner").style.display = isMobile ? "none" : "flex";
    }

    function updateActiveDot(index) {
        const dots = document.querySelectorAll(".glb-dot");
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }


    /* ============================================================
       10. KEYBOARD NAVIGATION
    ============================================================ */
    document.addEventListener("keydown", e => {
        if (!document.getElementById("glbOverlay")?.classList.contains("glb-open")) return;

        switch (e.key) {
            case "ArrowRight": case "ArrowDown":
                e.preventDefault(); goNext(); break;
            case "ArrowLeft": case "ArrowUp":
                e.preventDefault(); goPrev(); break;
            case "Escape":
                e.preventDefault(); closeLightbox(); break;
        }
    });


    /* ============================================================
       11. TOUCH / SWIPE SUPPORT
    ============================================================ */
    function initTouchEvents() {
        const stage = document.getElementById("glbStage");

        stage.addEventListener("touchstart", e => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchMoved = false;
        }, { passive: true });

        stage.addEventListener("touchmove", e => {
            const dx = Math.abs(e.touches[0].clientX - touchStartX);
            const dy = Math.abs(e.touches[0].clientY - touchStartY);
            if (dx > dy && dx > 8) {
                touchMoved = true;
                e.preventDefault(); // prevent page scroll during horizontal swipe
            }
        }, { passive: false });

        stage.addEventListener("touchend", e => {
            if (!touchMoved) return;
            const diffX = touchStartX - e.changedTouches[0].clientX;
            const diffY = Math.abs(touchStartY - e.changedTouches[0].clientY);

            if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY) {
                diffX > 0 ? goNext() : goPrev();
            }
        }, { passive: true });
    }


    /* ============================================================
       12. ATTACH CLICK EVENTS TO GALLERY CARDS
    ============================================================ */
    function attachGalleryCards() {
        // Select every element that has data-album-id set
        const cards = document.querySelectorAll("[data-album-id]");

        cards.forEach(card => {
            const albumId = card.dataset.albumId;
            const startIndex = parseInt(card.dataset.albumStart || "0", 10);

            // Add pointer & hint if not already there
            card.style.cursor = "pointer";

            // Inject click hint badge if the card doesn't already have one
            if (!card.querySelector(".glb-click-hint")) {
                const hint = document.createElement("div");
                hint.className = "glb-click-hint";
                hint.innerHTML = `<i class="fa-solid fa-images"></i> View Photos`;

                // Cards that are positioned need relative
                const pos = getComputedStyle(card).position;
                if (pos === "static") card.style.position = "relative";

                card.appendChild(hint);
            }

            // Remove any old listener then add fresh one
            card.removeEventListener("click", card._glbHandler);
            card._glbHandler = (e) => {
                // Don't open if clicking a child link/button
                if (e.target.closest("a, button")) return;
                openLightbox(albumId, startIndex);
            };
            card.addEventListener("click", card._glbHandler);
        });
    }


    /* ============================================================
       13. BIND STATIC CONTROLS
    ============================================================ */
    function bindControls() {
        document.getElementById("glbCloseBtn").addEventListener("click", closeLightbox);
        document.getElementById("glbPrev").addEventListener("click", goPrev);
        document.getElementById("glbNext").addEventListener("click", goNext);

        // Close on backdrop click (click outside image)
        document.getElementById("glbOverlay").addEventListener("click", e => {
            if (e.target === document.getElementById("glbOverlay") ||
                e.target === document.getElementById("glbStage")) {
                closeLightbox();
            }
        });
    }


    /* ============================================================
       14. RESPOND TO WINDOW RESIZE (swap dots ↔ thumbs)
    ============================================================ */
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!currentAlbumId) return;
            const isMobile = window.innerWidth < 600;
            document.getElementById("glbDots").style.display = isMobile ? "flex" : "none";
            document.getElementById("glbThumbsInner").style.display = isMobile ? "none" : "flex";
        }, 200);
    }, { passive: true });


    /* ============================================================
       15. PUBLIC API
       Access from console or other scripts:
           BLGallery.open("navratri-grand-festival");
           BLGallery.addAlbum("my-new-event", { title, category, photos });
    ============================================================ */
    window.BLGallery = {
        open(albumId, startIndex) {
            openLightbox(albumId, startIndex || 0);
        },
        close() {
            closeLightbox();
        },
        addAlbum(id, albumData) {
            ALBUMS[id] = albumData;
            attachGalleryCards();
        },
        refresh() {
            attachGalleryCards();
        }
    };


    /* ============================================================
       16. INIT — run when DOM is ready
    ============================================================ */
    function init() {
        buildLightboxHTML();
        bindControls();
        initTouchEvents();
        attachGalleryCards();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();