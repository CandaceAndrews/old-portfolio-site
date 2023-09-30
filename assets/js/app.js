// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
link.addEventListener("click", () => {
ul.classList.remove("show");
})
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
window.scrollTo({
top: 0,
left: 0,
behavior: "smooth",
});
});


// JavaScript for Lightbox

// Function to open the lightbox
function openLightbox(event) {
    event.preventDefault();
    const imageUrl = this.getAttribute("href");
    const lightboxImage = document.querySelector(".lightbox-image");
    lightboxImage.setAttribute("src", imageUrl);
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "block";
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "none";
}

// Function to go back from lightbox
function goBack() {
    // Implement the logic to go back from the lightbox here
    // For example, you can close the lightbox or navigate to the previous page state.
    closeLightbox();
}

// Add click event listeners to trigger the lightbox
const projectImageLinks = document.querySelectorAll(".project-image-link");
projectImageLinks.forEach((link) => {
    link.addEventListener("click", openLightbox);
});

// Add click event listener to close the lightbox
const closeLightboxButton = document.querySelector(".close-lightbox");
closeLightboxButton.addEventListener("click", closeLightbox);



