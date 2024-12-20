// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Exemplo de interação para mostrar mensagem de boas-vindas após 2 segundos
window.onload = function() {
    setTimeout(function() {
        // alert('Bem-vindo ao nosso site de casamento! Estamos muito felizes em compartilhar esse momento com você.');
    }, 2000);
};
