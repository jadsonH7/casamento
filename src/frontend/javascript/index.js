// Seletores de elementos
const bgMenu = document.querySelector(".conteiner-menu");
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".open-menu");
const logo = document.querySelector(".logo");

// Função para alternar o menu
function toggleMenu() {
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-ativo");
        bgMenu.classList.toggle("bgmenu-ativo");
        btnMenu.classList.toggle("exit-menu");

        // Fechar o menu em telas maiores (>= 992px)
        if (window.innerWidth >= 992) {
            menu.classList.remove("menu-ativo");
            bgMenu.classList.remove("bgmenu-ativo");
            btnMenu.classList.remove("exit-menu");
        }
    });
}

// Função para alterar o estilo do logo com base no scroll
function toggleLogoOnScroll() {
    window.addEventListener("scroll", () => {
        // Adicionar/remover classe do logo com base no scroll
        if (window.scrollY > 0) {
            logo.classList.add("logo-active");
        } else {
            logo.classList.remove("logo-active");
        }

        // Remover a classe do logo em telas maiores (>= 992px)
        if (window.innerWidth >= 992) {
            logo.classList.remove("logo-active");
        }
    });
}

// Inicializando as funcionalidades
toggleMenu();
toggleLogoOnScroll();
