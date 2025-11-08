# Projeto SistemaOngCSS (Desenvolvimento Front-End)

Este repositório contém o projeto "SistemaOngCSS", desenvolvido como parte das Atividades Práticas da disciplina de Desenvolvimento Front-End. O objetivo foi construir um site completo (com 8 páginas) para uma ONG fictícia, aplicando os conceitos de HTML5, CSS3 e JavaScript de forma progressiva.

Como estudante iniciante, este projeto foi minha primeira experiência completa em conectar HTML semântico, estilização responsiva e interatividade com JavaScript para criar um site coeso e funcional do zero.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para toda a estruturação semântica do conteúdo.
* **CSS3:** Para toda a estilização, responsividade e layout.
* **JavaScript (ES6+):** Para interatividade, validação de formulários e navegação SPA.
* **Git & GitHub:** Para versionamento de código e entrega das atividades.

---

## 📋 Funcionalidades Implementadas

Este projeto foi construído em três etapas (Atividades 1, 2 e 3), cobrindo os seguintes requisitos:

### Atividade 1: Estrutura (HTML)
* Criação de 8 páginas HTML conectadas e semânticas (`index`, `sobre`, `projetos`, `voluntariado`, `doacoes`, `transparencia`, `blog`, `contato`).
* Uso de tags semânticas como `<main>`, `<nav>`, `<section>`, `<article>` e `<footer>`.
* Criação de formulários complexos para Contato, Voluntariado e Newsletter.
* Implementação de uma galeria de fotos com 29 imagens na página "Sobre".
* Uso do elemento `<canvas>` para exibir 3 gráficos estáticos na página "Transparência".

### Atividade 2: Estilização (CSS)
* Criação de um **Design System** modular usando Variáveis CSS (`:root`) para cores, fontes e espaçamentos.
* Implementação de um **Layout Principal** com CSS Grid (`grid-template-areas`).
* Desenvolvimento de um **Grid de 12 Colunas** customizado (`.row`, `.col-*`) com Flexbox para organizar o conteúdo.
* Criação de **5 Breakpoints Responsivos** (`@media`) para garantir que o site funcione em celulares, tablets e desktops.
* Estilização de todos os componentes de interface, incluindo:
    * `.card`: Para posts de blog, projetos e gráficos.
    * `.botao`: Com estados de `:hover`, `:focus` e `:active`.
    * `.alert`: Para mensagens de feedback.
    * `.badge`: Para as tags dos posts do blog.

### Atividade 3: Interatividade (JavaScript)
* **Código Modular:** O JavaScript foi organizado em arquivos separados na pasta `js/` (`script.js`, `validation.js`, `spa.js`).
* **Menu Hambúrguer:** O menu responsivo é 100% funcional através da função `toggleMenu()`.
* **Validação de Formulários:** Implementação de um sistema de verificação em todos os 3 formulários do site. O script impede o envio (`event.preventDefault()`) se os campos obrigatórios (como nome, e-mail ou seleção de dias) não estiverem corretos, exibindo mensagens de erro dinâmicas.
* **SPA Básico (Single Page Application):** O site não recarrega ao navegar pelo menu. Foi usado `fetch()` para buscar o conteúdo da página clicada e `DOMParser()` para "recortar" o `<main>` e injetá-lo na página atual, criando uma navegação instantânea.

---

## 🖥️ Como Visualizar o Projeto

Você pode acessar o site completo e funcional através do link do GitHub Pages:

**[https://leosilvas-collab.github.io/SistemaOngCSS/](https://leosilvas-collab.github.io/SistemaOngCSS/)**

*(A branch publicada no GitHub Pages será atualizada conforme as atividades avançam.)*

---

## 👨‍💻 Autor

* **Leocladison da Silva Souto**
* [GitHub](https://github.com/leosilvas-collab)