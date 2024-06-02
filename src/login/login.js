const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const buttonSubmit = document.querySelector("#btn-submit");
isSigned = false;

buttonSubmit.addEventListener("click", () => {
    email = emailInput.value;
    password = passwordInput.value;

    if (email === "teste@gmail.com" && password === "pass123") {
        isSigned = true;
        localStorage.setItem("signedBool", isSigned);
        alert("Login concluído com sucesso! Redirecionando usuário para a página de dashboard...");
        return location.assign("../dashboard/dashboard.html");
    }
    else {
        alert("Dados inseridos estão incorretos...");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("signedBool") == true) {
        return window.location.assign("../dashboard/dashboard.html");
    }
});
