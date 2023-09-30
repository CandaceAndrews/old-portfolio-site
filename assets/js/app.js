// scroll to top functionality
const scrollup = document.querySelector("#scroll-up");

scrollup.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});