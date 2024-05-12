// Valida Campos Genéricos
function validaCampos(campoId, maxCaracteres) {

    const campo = document.getElementById(campoId).value.trim();
    
    if (campo === "") {
        return { isValid: false, errorMessage: `O campo ${campoId} não pode ser vazio.` };
    }

    if (campo.length > maxCaracteres) {
        return { isValid: false, errorMessage: `O campo ${campoId} não pode ter mais de ${maxCaracteres} caracteres.` };
    }

    return {isValid: true} ;

}

// Valida Campo E-mail
function validaCampoEmail() {
    const campoEmail = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (campoEmail === "") {
        return { isValid: false, errorMessage: `O campo email não pode ser vazio.` };
    }

    if (!emailRegex.test(campoEmail)) {
        return { isValid: false, errorMessage: `O campo email deve ser um email válido.` };
    }

    return { isValid: true };
}

// Valida Campos Genéricos
function validaCampos(campoId, maxCaracteres) {

    const campo = document.getElementById(campoId).value.trim();
    
    if (campo === "") {
        return { isValid: false, errorMessage: `O campo ${campoId} não pode ser vazio.` };
    }

    if (campo.length > maxCaracteres) {
        return { isValid: false, errorMessage: `O campo ${campoId} não pode ter mais de ${maxCaracteres} caracteres.` };
    }

    return {isValid: true} ;

}


// Valida Campo E-mail
function validaCampoEmail() {
    const campoEmail = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (campoEmail === "") {
        return { isValid: false, errorMessage: `O campo email não pode ser vazio.` };
    }

    if (!emailRegex.test(campoEmail)) {
        return { isValid: false, errorMessage: `O campo email deve ser um email válido.` };
    }

    return { isValid: true };
}

// Valida Todos os Campos
function validaTodosCampos() {
    const nomeValidado = validaCampos("nome", 50);
    const emailValidado = validaCampoEmail("email");
    const assuntoValidado = validaCampos("assunto", 50);
    const mensagemValidada = validaCampos("mensagem", 300);

    const isValid = nomeValidado.isValid && emailValidado.isValid && assuntoValidado.isValid && mensagemValidada.isValid;

    if (!isValid) {

        if (!nomeValidado.isValid) {
            document.getElementById("error-nome").textContent = nomeValidado.errorMessage;
        } else {
            document.getElementById("error-nome").textContent = "";
        }

        if (!emailValidado.isValid) {
        document.getElementById("error-email").textContent = emailValidado.errorMessage;

        } else {
            document.getElementById("error-email").textContent = "";
        }

        if (!assuntoValidado.isValid) {
            document.getElementById("error-assunto").textContent = assuntoValidado.errorMessage;
        } else {
            document.getElementById("error-assunto").textContent = "";
        }

        if (!mensagemValidada.isValid) {
            document.getElementById("error-mensagem").textContent = mensagemValidada.errorMessage;
        } else {
            document.getElementById("error-mensagem").textContent = "";
        }
  
    }
        return isValid;
}

// Valida Envio Botao
document.getElementById("botao").addEventListener("click", function(event) {
    event.preventDefault();

    const isValid = validaTodosCampos();
    if (isValid) {
        document.getElementById("sendMessage").textContent = "Enviado!";
    } else {
        document.getElementById("sendMessage").textContent = "Corrija os erros acima e tente novamente.";
    }
});


// Valida Envio Botao
document.getElementById("botao").addEventListener("click", function(event) {
    event.preventDefault();

    const isValid = validaTodosCampos();
    if (isValid) {
        document.getElementById("sendMessage").textContent = "Enviado!";

        document.getElementById("error-nome").textContent = "";
        document.getElementById("error-email").textContent = "";
        document.getElementById("error-assunto").textContent = "";
        document.getElementById("error-mensagem").textContent = "";

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("assunto").value = "";
        document.getElementById("mensagem").value = "";

    } else {
        document.getElementById("sendMessage").textContent = "Corrija os erros acima e tente novamente.";
    }
});