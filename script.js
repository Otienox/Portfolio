const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

// Mobile navigation menu
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Automatically update copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
