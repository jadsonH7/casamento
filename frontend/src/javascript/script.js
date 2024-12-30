// Função para alternar o menu
function toggleMenu() {
    const bgMenu = document.querySelector(".conteiner-menu");
    const menu = document.querySelector(".menu");
    const btnMenu = document.querySelector(".open-menu");

    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-ativo");
        bgMenu.classList.toggle("bgmenu-ativo");
        btnMenu.classList.toggle("exit-menu");
    });

    const btnContato = document.querySelector(".nav-contato");

    btnContato.addEventListener("click", () => {
        menu.classList.remove("menu-ativo");
        bgMenu.classList.remove("bgmenu-ativo");
        btnMenu.classList.remove("exit-menu");
    });
};
toggleMenu();

// Função para alterar o estilo do logo com base no scroll
function toggleLogoOnScroll() {
    const logo = document.querySelector(".logo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            logo.classList.add("logo-active");
        } else {
            logo.classList.remove("logo-active");
        }
    });
};
toggleLogoOnScroll();
