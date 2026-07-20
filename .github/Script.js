/* ==========================================
   DOROZ WEBSITE V2.0
   Premium JavaScript
========================================== */

// ================================
// Loader
// ================================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ================================
// Sticky Navbar Shadow
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

// ================================
// Scroll To Top Button
// ================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ================================
// Active Navigation
// ================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// ================================
// Initialize AOS
// ================================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 800,

        once: true

    });

}

console.log("✅ DOROZ Website Loaded Successfully");/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery img");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImg" src="" alt="Gallery Image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeLightbox");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

/* ==========================================
   ANIMATED COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = Number(counter.dataset.target);
        const count = Number(counter.innerText);

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        const name = document.getElementById("name");
        const phone = document.getElementById("phone");

        if (!name.value.trim()) {

            alert("Please enter your name.");
            e.preventDefault();
            return;

        }

        if (phone.value.length < 10) {

            alert("Please enter a valid mobile number.");
            e.preventDefault();
            return;

        }

    });

}

/* ==========================================
   LAZY IMAGE LOADING
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

/* ==========================================
   AUTO TESTIMONIAL SLIDER
========================================== */

const testimonial = document.querySelector("#testimonialSlider");

if (testimonial) {

    new bootstrap.Carousel(testimonial, {

        interval: 4000,
        ride: "carousel"

    });

}

/* ==========================================
   PAGE LOADED
========================================== */

console.log("🚀 DOROZ JavaScript Fully Loaded");
