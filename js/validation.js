// Aguarda o HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- Tenta encontrar os formulários ---
    const formContato = document.getElementById("form-contato");
    const formVoluntario = document.getElementById("form-voluntario");
    const formNewsletter = document.getElementById("form-newsletter"); // <-- NOVO

    // =============================================
    // GRUPO DE VALIDAÇÃO: Formulário de Contato
    // =============================================
    if (formContato) {
        const nomeInput = document.getElementById("nome_cont");
        const mensagemInput = document.getElementById("mensagem");
        const nomeError = document.getElementById("error-nome");
        const mensagemError = document.getElementById("error-mensagem");
        const alertSucesso = document.getElementById("alert-sucesso");

        formContato.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            nomeError.textContent = "";
            mensagemError.textContent = "";
            alertSucesso.style.display = "none";
            
            let isValid = true; 

            if (nomeInput.value.trim() === "") {
                nomeError.textContent = "Por favor, preencha seu nome.";
                isValid = false;
            }

            if (mensagemInput.value.trim().length < 10) {
                mensagemError.textContent = "Sua mensagem deve ter pelo menos 10 caracteres.";
                isValid = false;
            }

            if (isValid) {
                alertSucesso.style.display = "block";
                formContato.reset();
            }
        });
    } // Fim do if(formContato)

    // ========================================================
    // GRUPO DE VALIDAÇÃO: Formulário de Voluntariado
    // ========================================================
    if (formVoluntario) {
        const alertSucesso = document.getElementById("alert-sucesso-voluntario");
        const nomeVol = document.getElementById("nome_vol");
        const emailVol = document.getElementById("email_vol");
        const telVol = document.getElementById("tel_vol");
        const nascVol = document.getElementById("nascimento");
        const areaVol = document.getElementById("area_interesse");
        const diasCheckboxes = document.querySelectorAll("input[name='dias']");
        const periodoRadios = document.querySelectorAll("input[name='periodo']");
        const nomeError = document.getElementById("error-nome-vol");
        const emailError = document.getElementById("error-email-vol");
        const telError = document.getElementById("error-tel-vol");
        const nascError = document.getElementById("error-nascimento-vol");
        const areaError = document.getElementById("error-area-vol");
        const diasError = document.getElementById("error-dias-vol");
        const periodoError = document.getElementById("error-periodo-vol");


        formVoluntario.addEventListener("submit", function(event) {
            event.preventDefault(); 
            let isValid = true; 

            alertSucesso.style.display = "none";
            nomeError.textContent = "";
            emailError.textContent = "";
            telError.textContent = "";
            nascError.textContent = "";
            areaError.textContent = "";
            diasError.textContent = "";
            periodoError.textContent = "";

            if (nomeVol.value.trim() === "") {
                nomeError.textContent = "O nome é obrigatório.";
                isValid = false;
            }
            if (emailVol.value.trim() === "") {
                emailError.textContent = "O e-mail é obrigatório.";
                isValid = false;
            }
            if (telVol.value.trim() === "") {
                telError.textContent = "O telefone é obrigatório.";
                isValid = false;
            }
            if (nascVol.value === "") {
                nascError.textContent = "A data de nascimento é obrigatória.";
                isValid = false;
            }
            if (areaVol.value === "") {
                areaError.textContent = "Selecione uma área de interesse.";
                isValid = false;
            }

            let diaSelecionado = false;
            for (const checkbox of diasCheckboxes) {
                if (checkbox.checked) {
                    diaSelecionado = true;
                    break;
                }
            }
            if (!diaSelecionado) {
                diasError.textContent = "Selecione pelo menos um dia.";
                isValid = false;
            }

            let periodoSelecionado = false;
            for (const radio of periodoRadios) {
                if (radio.checked) {
                    periodoSelecionado = true;
                    break;
                }
            }
            if (!periodoSelecionado) {
                periodoError.textContent = "Selecione um período.";
                isValid = false;
            }

            if (isValid) {
                alertSucesso.style.display = "block";
                formVoluntario.reset();
            }
        });
    } // Fim do if(formVoluntario)

    // ========================================================
    // GRUPO DE VALIDAÇÃO: Formulário de Newsletter (NOVO)
    // ========================================================
    if (formNewsletter) {
        const emailInput = document.getElementById("email_news");
        const emailError = document.getElementById("error-email-news");
        const alertSucesso = document.getElementById("alert-sucesso-news");

        formNewsletter.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;
            
            emailError.textContent = "";
            alertSucesso.style.display = "none";

            // Simples validação de e-mail (só verifica se não está vazio)
            if (emailInput.value.trim() === "") {
                emailError.textContent = "O e-mail é obrigatório.";
                isValid = false;
            }

            if (isValid) {
                alertSucesso.style.display = "block";
                formNewsletter.reset();
            }
        });
    } // Fim do if(formNewsletter)

});