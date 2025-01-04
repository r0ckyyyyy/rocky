// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Display success message
    const formStatus = document.getElementById("formStatus");
    formStatus.textContent = "Thank you for your message! We'll get back to you soon.";
    formStatus.classList.remove("hidden");

    // Clear the form
    this.reset();

    // Hide the message after 5 seconds
    setTimeout(() => {
        formStatus.classList.add("hidden");
    }, 5000);
});

// Highlight navigation links on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
