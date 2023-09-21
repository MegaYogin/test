const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const navbarContainer = document.getElementById("navbar-container");

leftArrow.addEventListener("click", function() {
    smoothScroll(navbarContainer, -100); 
});

rightArrow.addEventListener("click", function() {
    smoothScroll(navbarContainer, 100); 
});

function smoothScroll(element, amount) {
    const start = element.scrollLeft;
    const end = start + amount;
    const duration = 300; 
    let startTime;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        element.scrollLeft = easeInOutCubic(progress, start, amount, duration);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

    requestAnimationFrame(step);
}