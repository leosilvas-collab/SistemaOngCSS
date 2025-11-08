// Adiciona um elemento de menu móvel ao clicar no ícone
// No seu arquivo /js/script.js

function toggleMenu() {
    const mobileMenu = document.getElementById("nav-links-mobile");
    const menuButton = document.querySelector(".menu-hamburguer");

    // 1. Alterna a classe .ativo (como antes)
    mobileMenu.classList.toggle("ativo");

    // 2. Verifica se o menu AGORA está ativo
    const estaAtivo = mobileMenu.classList.contains("ativo");

    // 3. Atualiza os atributos ARIA (Requisito da Atividade 4)
    // Isso avisa aos leitores de tela se o menu está expandido ou não.
    menuButton.setAttribute("aria-expanded", estaAtivo);
}