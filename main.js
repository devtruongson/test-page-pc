const ToogleMenu = document.querySelector(".toggle-menu");
const MenuWp = document.querySelector(".meu-mb-wp");

ToogleMenu.addEventListener("click", () => {
    MenuWp.classList.toggle("active-header");
});
