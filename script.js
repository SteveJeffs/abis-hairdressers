const menuBtn = document.getElementById("menuBtn");
const panel = document.getElementById("panel");

menuBtn.addEventListener("click", function () {
    const isOpen = panel.classList.toggle("showing");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

