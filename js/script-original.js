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

/* --- INÍCIO DA LÓGICA DO MODO ESCURO (ATIVIDADE 4) --- */

// Aguarda o HTML carregar
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para ativar/desativar o modo escuro
    const toggleDarkMode = (activate) => {
        if (activate) {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Ícone de Sol
            themeToggle.setAttribute('aria-label', 'Ativar modo claro');
            localStorage.setItem('theme', 'dark'); // Salva a preferência
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; // Ícone de Lua
            themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
            localStorage.setItem('theme', 'light'); // Salva a preferência
        }
    };

    // Verifica a preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');

    // Se o usuário já escolheu "dark" antes, ativa
    if (savedTheme === 'dark') {
        toggleDarkMode(true);
    }

    // Adiciona o "ouvinte" de clique ao botão
    themeToggle.addEventListener('click', () => {
        // Se o body JÁ TEM a classe 'dark-mode', desativa. Senão, ativa.
        const isDarkMode = body.classList.contains('dark-mode');
        toggleDarkMode(!isDarkMode);
    });

});
/* --- FIM DA LÓGICA DO MODO ESCURO --- */