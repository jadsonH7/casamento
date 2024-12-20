document.addEventListener("DOMContentLoaded", function() {
    // Função de interação com o botão de "contar passos"
    const countButton = document.querySelector('.count-steps');
    countButton.addEventListener('click', function() {
        const steps = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório de 1 a 10
        alert(`Você deu ${steps} passos até o altar! Vamos voltar para a festa e continuar a celebração!`);
    });
});
