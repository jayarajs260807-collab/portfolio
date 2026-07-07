// ================================
// Mobile Menu
// ================================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ================================
// Sticky Header
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,17,31,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(0,0,0,0.25)";
        header.style.boxShadow = "none";
    }
});

// ================================
// Scroll Reveal Animation
// ================================

const reveals = document.querySelectorAll("section");

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

// ================================
// Contact Form
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    form.reset();
});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Typing Effect
// ================================

const text = [
    "AI & ML Student",
    "Full Stack Developer",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const heading = document.querySelector(".hero h2");

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    heading.textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;
            type();

        }, 1800);

    } else {

        setTimeout(type, 100);

    }

})();

// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================================
// Console Message
// ================================

console.log("%cWelcome to Jayaraj's Portfolio 🚀",
"color:#00d9ff;font-size:20px;font-weight:bold;");