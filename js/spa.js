// Espera a página carregar inteira primeiro
document.addEventListener('DOMContentLoaded', () => {

    // 1. Tenho que pegar TODOS os links do menu
    // Pega os links do menu de desktop (nav ul li a) E do menu mobile (.nav-links-mobile li a)
    const navLinks = document.querySelectorAll('nav ul li a, .nav-links-mobile li a');

    // 2. Aonde o conteúdo novo vai entrar
    // É o <main> principal da página
    const mainContent = document.querySelector('main');

    // 3. A função que faz a mágica de carregar a página
    // 'async' significa que ela vai ter que "esperar" (await) o fetch terminar
    const loadPage = async (url) => {
        try {
            // 'fetch' é o comando que busca a outra página (ex: sobre.html)
            const response = await fetch(url);
            
            // Se der erro (tipo 404), avisa no console
            if (!response.ok) {
                throw new Error(`A página não carregou, deu erro`);
            }

            // Pega o HTML inteiro da página que o fetch buscou
            const pageHtml = await response.text();

            // 4. "Template" (O truque para "recortar" só o <main>)
            // Crio um analisador de HTML na memória
            const parser = new DOMParser();
            const doc = parser.parseFromString(pageHtml, 'text/html');
            
            // Pego o HTML de DENTRO do <main> da página nova
            const newMainContent = doc.querySelector('main').innerHTML;

            // 5. Coloco o conteúdo novo no <main> da página atual
            // Isso troca o miolo da página sem dar refresh
            mainContent.innerHTML = newMainContent;
            
            // Bônus: Mudar o título da aba (copia o título da página nova)
            document.title = doc.title;

        } catch (error) {
            console.error('Deu ruim no SPA:', error);
            // Se o 'fetch' falhar, só navega do jeito normal (dando refresh)
            window.location.href = url;
        }
    };

    // 6. Fazer cada link do menu "escutar" o clique
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            
            // Impede o link de recarregar a página (o comportamento padrão)
            event.preventDefault(); 
            
            // Pega o endereço do link (o 'href')
            const href = link.getAttribute('href');

            // Chama a função lá de cima para carregar a página
            loadPage(href);

            // Bônus: Atualiza a URL (ex: muda de /index.html para /sobre.html)
            window.history.pushState(null, '', href);

            // Bônus: Se o menu mobile estiver aberto, fecha ele
            const mobileMenu = document.getElementById('nav-links-mobile');
            mobileMenu.classList.remove('ativo');
        });
    });

    // Bônus: Faz os botões "Voltar" e "Avançar" do navegador funcionarem
    window.addEventListener('popstate', () => {
        // Quando clicar em "Voltar", ele lê a URL e carrega o conteúdo dela
        loadPage(window.location.pathname);
    });
});