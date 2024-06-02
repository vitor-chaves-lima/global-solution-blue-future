const emailInput = document.querySelector("#email-input");
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
});
