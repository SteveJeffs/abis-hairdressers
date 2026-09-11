const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const panel = document.getElementById("panel");

menuBtn.addEventListener("click", function () {
    const isOpen = panel.classList.toggle("showing");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

closeBtn.addEventListener("click", function () {
    panel.classList.remove("showing");
    menuBtn.setAttribute("aria-expanded", "false");
});
