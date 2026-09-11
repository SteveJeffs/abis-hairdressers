const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const panel = document.getElementById("panel");

function closePanel() {
    panel.classList.remove("showing");
    menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", function () {
    const isOpen = panel.classList.toggle("showing");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

closeBtn.addEventListener("click", function () {
    panel.classList.remove("showing");
    menuBtn.setAttribute("aria-expanded", "false");
});

panel.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        panel.classList.remove("showing");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        panel.classList.remove("showing");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});