// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable key combinations for DevTools
document.onkeydown = function (e) {
    if (e.key === "F12") {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.key === "U") {
        e.preventDefault();
        return false;
    }
};
