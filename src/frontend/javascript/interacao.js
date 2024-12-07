// Interação Menu
const bgMenu = document.querySelector(".conteiner-menu");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".open-menu");

function showMenu() {
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-ativo");
        bgMenu.classList.toggle("bgmenu-ativo");
        btnMenu.classList.toggle("exit-menu");
    })
};
showMenu();

// Window scroll
const logo = document.querySelector(".logo");

function windowScroll() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0)
            logo.classList.add("logo-active");
        else
            logo.classList.remove("logo-active");
    });
};
windowScroll();
