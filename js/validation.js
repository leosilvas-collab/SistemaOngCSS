// criação do arquivo js/validation.js


document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleciona os elementos do DOM
    const form = document.getElementById("form-contato");
    const nomeInput = document.getElementById("nome_cont");
    const mensagemInput = document.getElementById("mensagem");
    
    const nomeError = document.getElementById("error-nome");
    const mensagemError = document.getElementById("error-mensagem");
    
    const alertSucesso = document.getElementById("alert-sucesso");

    // 2. Adiciona um "ouvinte" para o evento 'submit' do formulário
    form.addEventListener("submit", function(event) {
        
        // Impede o envio padrão do formulário (que recarrega a página)
        event.preventDefault(); 
        
        // Limpa erros antigos
        nomeError.textContent = "";
        mensagemError.textContent = "";
        alertSucesso.style.display = "none";
        
        let isValid = true; // Variável de controle

        // 3. Validação do Nome
        if (nomeInput.value.trim() === "") {
            nomeError.textContent = "Por favor, preencha seu nome.";
            isValid = false;
        }

        // 4. Validação da Mensagem (Requisito: Mínimo 10 caracteres)
        if (mensagemInput.value.trim().length < 10) {
            mensagemError.textContent = "Sua mensagem deve ter pelo menos 10 caracteres.";
            isValid = false;
        }

        // 5. Se tudo estiver válido, mostra o sucesso
        if (isValid) {
            alertSucesso.style.display = "block"; // Mostra o alerta de sucesso
            form.reset(); // Limpa o formulário
        }
    });
});