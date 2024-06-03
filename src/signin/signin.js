const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmationInput = document.querySelector("#password__confirmation-input");
const buttonSubmit = document.querySelector("#btn-submit");

let isSigned = false;

buttonSubmit.addEventListener("click", () => {
    const email = emailInput.value;
    if (
        !emailInput.validity.valid ||
        email.indexOf('.') == -1
    ) {
        return alert("Email inválido");
    }
    
    const password = passwordInput.value;
    const confirmation = confirmationInput.value;
    
    if (password !== confirmation) {
        return alert("Senhas não correspondem, tente novamente.");
    }
    
    isSigned = true;
    localStorage.setItem("signedBool", isSigned);
    alert("Cadastro concluído com sucesso! Redirecionando usuário para a página de dashboard...");
    return location.assign("../dashboard/dashboard.html");
});


document.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.getItem("signedBool"));
    if (localStorage.getItem("signedBool") === "true") {
        alert("Usuário já logado na plataforma! Redirecionando para a página de dashboard...");
        return location.assign("../dashboard/dashboard.html");
    }
});
