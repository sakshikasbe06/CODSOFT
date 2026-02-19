window.addEventListener("load", () => {
    console.log("Portfolio loaded successfully 👍");
    reveal();
});

function toggleMenu() {
    const nav = document.querySelector("nav ul");
    if (nav) nav.classList.toggle("active");
}

window.addEventListener("scroll", reveal);

// Reveal sections
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

// Resume modal
function openResume() {
    const modal = document.getElementById("resumeModal");
    if (modal) modal.style.display = "block";
}

function closeResume() {
    const modal = document.getElementById("resumeModal");
    if (modal) modal.style.display = "none";
}

// Close menu on link click
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.querySelector("nav ul");
        if (nav) nav.classList.remove("active");
    });
});

// Image modal
function openImage(src) {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("modalImg");
    if (modal && img) {
        modal.style.display = "block";
        img.src = src;
    }
}

function closeImage() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
}

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        current = "contact";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Close modal on outside click
window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("resumeModal")) closeResume();
    if (e.target === document.getElementById("imageModal")) closeImage();
});

// ESC key close
window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeResume();
        closeImage();
    }
});

// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) menuToggle.addEventListener("click", toggleMenu);

// Resume button
const resumeBtn = document.getElementById("viewResumeBtn");
if (resumeBtn) resumeBtn.addEventListener("click", openResume);

// Project image click
document.querySelectorAll(".project-img").forEach(img => {
    img.addEventListener("click", function () {
        openImage(this.src);
    });
});

// Certificate click
document.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", function () {
        const img = this.querySelector("img");
        if (img) openImage(img.src);
    });
});

// Close buttons
const resumeClose = document.querySelector(".resume-close");
if (resumeClose) resumeClose.addEventListener("click", closeResume);

const imageClose = document.querySelector(".image-close");
if (imageClose) imageClose.addEventListener("click", closeImage);
