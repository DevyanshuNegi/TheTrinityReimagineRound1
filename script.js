document.addEventListener("mouseover", handleDropdown);
document.addEventListener("mouseout", handleDropdown);  // Added mouseout listener

function handleDropdown(event) {
    const target = event.target;  // Cache the target element

    // Check if the event originated from a dropdown button or within a dropdown
    if (target.matches("[data-dropdown-button]") || target.closest("[data-dropdown]") !== null) {

        const currentDropdown = target.closest("[data-dropdown]");

        // Use a timeout to avoid immediate closing on mouse movements within the dropdown
        if (event.type === "mouseover") {
            clearTimeout(currentDropdown.closeTimeout); // Clear any existing timeout
            currentDropdown.classList.add("active");
        } else if (event.type === "mouseout" && !currentDropdown.contains(event.relatedTarget)) {
            currentDropdown.closeTimeout = setTimeout(() => {
                currentDropdown.classList.remove("active");
            }, 100); // Add a slight delay (adjust as needed)
        }
    }
}


/*

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");

    // Get the original position of the logo (assuming it's initially hidden)
    const originalPosition = {
        x: logo.offsetLeft,
        y: logo.offsetTop
    };

    // Set the initial styles for the animation (logo initially hidden and positioned off-center)
    gsap.set(logo, {
        opacity: 0, // Logo starts invisible
        x: window.innerWidth / 2, // Center horizontally
        y: window.innerHeight / 2 // Center vertically
    });

    // Create the GSAP timeline for the animation
    const tl = gsap.timeline();

    // Animate the logo to appear and move to its original position
    tl.to(logo, {
        duration: 1, // Adjust duration as needed (in seconds)
        ease: "power3.out", // Customize easing for animation smoothness
        opacity: 1, // Fade in
        x: originalPosition.x, // Move to original X position
        y: originalPosition.y // Move to original Y position
    });
});

*/