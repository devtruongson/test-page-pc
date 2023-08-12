const ToogleMenu = document.querySelector(".toggle-menu");
const MenuWp = document.querySelector(".meu-mb-wp");
const Overlay = document.querySelector(".obverlay");
const BtnClose = document.querySelector(".close-header");

ToogleMenu.addEventListener("click", () => {
    MenuWp.style.display = "block";
});

Overlay.addEventListener("click", () => {
    MenuWp.style.display = "none";
});

BtnClose.addEventListener("click", () => {
    MenuWp.style.display = "none";
});
