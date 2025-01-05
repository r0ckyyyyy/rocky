// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Display success message
    const formStatus = document.getElementById("formStatus");
    formStatus.textContent = "Thank you for your message! We'll get back to you soon.";
    formStatus.classList.remove("hidden");

    // Clear the form fields
    this.reset();

    // Hide the success message after 5 seconds
    setTimeout(() => {
        formStatus.classList.add("hidden");
    }, 5000);
});
