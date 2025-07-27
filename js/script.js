const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

// Show Menu
ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// Hide Menu
ClaseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});