// for dropdown menus

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

// code for the logo animation in the starting
// comment it out if you don't want the animation
// comment it out in development
// /*

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");

    // Get the original position of the logo (assuming it's initially hidden)
    const originalPosition = {
        x: logo.offsetLeft,
        y: logo.offsetTop
    };

    gsap.set(logo, {
        opacity: 0, // Logo starts invisible
        x: window.innerWidth / 2, // Center horizontally
        y: window.innerHeight / 2 // Center vertically
    });

    const tl = gsap.timeline();
    const originalWidth = 50; // Gets actual image width after loading
    const originalHeight = 50; // Gets actual image height after loading
    console.log(originalWidth, originalHeight)
    console.log(logo.clientWidth, logo.clientHeight)
    // Set the initial styles for the animation (image initially hidden and scaled up)
    gsap.set(logo, {
        opacity: 1, // Initially hidden
        scale: 12// Scaled up 3 times bigger (adjust as needed)
    });
    console.log(originalWidth, originalHeight)
    console.log(logo.clientWidth, logo.clientHeight)
    // Animate the logo to appear and move to its original position
    tl
        .to(logo, {
            duration: 1, // Adjust duration as needed (in seconds)
            ease: "power3.out", // Customize easing for animation smoothness
            opacity: 1, // Fade in
            scaleX: originalWidth / logo.clientWidth, // Scale X to original width
            scaleY: originalHeight / logo.clientHeight // Scale Y to original height
        })
        .to(logo, {
            duration: 2, // Adjust duration as needed (in seconds)
            ease: "power3.out", // Customize easing for animation smoothness
            opacity: 1, // Fade in
            x: originalPosition.x, // Move to original X position
            y: originalPosition.y // Move to original Y position
        });
});

// */