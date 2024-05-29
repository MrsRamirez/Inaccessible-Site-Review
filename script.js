function popupOne() {
    var popup = document.getElementById("popupOne");
    popup.innerHTML = "&#9989; Yes! The background and text colors need more contrast.";
    popup.classList.add("show");
    // Announce the popup content to screen readers
    announcePopupContent(popup.textContent);
    // Set focus to the popup for keyboard accessibility
    popup.focus();
}

function popupTwo() {
    var popup = document.getElementById("popupTwo");
    popup.innerHTML = "&#9989; Absolutely! There should be alt text that appears when hovering the image. This is important for screen readers.";
    popup.classList.add("show");
    announcePopupContent(popup.textContent);
    popup.focus();
}

function popupThree() {
    var popup = document.getElementById("popupThree");
    popup.innerHTML = "&#9989; Terrific! Links to other sites need to be descriptive and include a title of the linked page to let users with screen readers know where the link redirects.";
    popup.classList.add("show");
    announcePopupContent(popup.textContent);
    popup.focus();
}

function popupFour() {
    var popup = document.getElementById("popupFour");
    popup.innerHTML = "&#10060; Sorry. This text is already accessible. The color contrast passes the WCAG tests and is readable by screen reading software.";
    popup.classList.add("show");
    announcePopupContent(popup.textContent);
    popup.focus();
}

function popupFive() {
    var popup = document.getElementById("popupFive");
    popup.innerHTML = "&#10060; Sorry. This text is already accessible. The color contrast passes the WCAG tests and is readable by screen reading software.";
    popup.classList.add("show");
    announcePopupContent(popup.textContent);
    popup.focus();
}

// Function to announce changes to screen readers
function announcePopupContent(content) {
    var liveRegion = document.getElementById("aria-live-region");
    // Set the content and trigger screen reader announcement
    liveRegion.textContent = content;
    liveRegion.setAttribute("aria-hidden", "false");
    // Hide the content after a short delay to ensure screen readers announce it
    setTimeout(function() {
        liveRegion.setAttribute("aria-hidden", "true");
    }, 1000);
}

//The show class is added to the popups to make them visible, and the content is updated accordingly.
//ARIA live regions are used to announce the popup content changes to screen readers.
//Focus is set to the opened popup for keyboard accessibility.
//A timeout is used to hide the live region content after a short delay to ensure screen readers announce it.