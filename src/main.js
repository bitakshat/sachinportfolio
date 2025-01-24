
document.addEventListener("DOMContentLoaded", () => {
    // Create the circle element
    const cursorCircle = document.createElement("div");
    cursorCircle.style.position = "fixed";
    cursorCircle.style.width = "50px";
    cursorCircle.style.height = "50px";
    cursorCircle.style.border = "2px solid rgba(135, 135, 135, 0.2)";
    cursorCircle.style.borderRadius = "50%";
    cursorCircle.style.pointerEvents = "none";
    // cursorCircle.style.transition = "background-color 0.3s ease";
    cursorCircle.style.zIndex = "1000";
    document.body.appendChild(cursorCircle);

    let currentHighlighted = null;

    // Add mousemove event to track cursor and highlight elements
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event; // Use client coordinates for fixed position

        // Move the circle to the cursor position
        cursorCircle.style.left = `${clientX - cursorCircle.offsetWidth / 2}px`;
        cursorCircle.style.top = `${clientY - cursorCircle.offsetHeight / 2}px`;

        // Find the element under the cursor
        const hoveredElement = document.elementFromPoint(clientX, clientY);

        // If hoveredElement is different from the current highlighted one
        if (hoveredElement !== currentHighlighted) {
            // Remove highlight class from the previous element
            if (currentHighlighted) {
                currentHighlighted.classList.remove("highlighted");
            }

            // Add highlight class to the new element
            if (hoveredElement && hoveredElement !== cursorCircle) {
                hoveredElement.classList.add("highlighted");
                currentHighlighted = hoveredElement;
            } else {
                currentHighlighted = null;
            }
        }
    });
});


document.addEventListener('scroll', () => {
    const svgs = document.querySelectorAll('svg');
    const scrollPosition = window.scrollY + window.innerHeight;

    svgs.forEach((svg, index) => {
        const rect = svg.getBoundingClientRect();
        const svgPosition = rect.top + window.scrollY;

        if (scrollPosition > svgPosition) {
            svg.style.transform = `scale(${1 + (scrollPosition - svgPosition) / 1000})`;
        } else {
            svg.style.transform = 'scale(1)';
        }
    });
});

const path = document.querySelector('#line');

// Animate the line using Kute.js
KUTE.fromTo(
    path,
    { strokeDashoffset: 300 }, // Starting point
    { strokeDashoffset: 0 },   // End point
    { duration: 2000, easing: 'easeInOutQuad' } // Options
).start();